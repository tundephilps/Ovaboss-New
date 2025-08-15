import React from "react";
import axiosClient from "../utils/axiosClient";
import { BusinessCategoryType, IsLoading, Product, ProductCategory, ProductInput, ProductInputVariant, ProductSubCategory, ProductVariant, UseProductProps, VariantTable } from "../types/product.type";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

interface GetProductProps {
    categoryId?: number;
    subCategoryId?: number;
}

const useProduct = ({ shouldGetAllProducts = false, shouldGetMyProducts, shouldGetCategory = true, shouldGetBusinessCategoryType = true }: UseProductProps = {}) => {
    const [ isLoading, setIsLoading ] = React.useState<IsLoading>({
        productCategory: true,
        productSubCategory: false,
        productVariants: false,
        allProducts: true,
        myProducts: true,
        addProduct: false,
        productType: false,
        isSaving: false,
    });
    const [ productCategories, setProductCategories ] = React.useState<ProductCategory[]>([])
    const [ productSubCategories, setProductSubCategories ] = React.useState<ProductSubCategory[]>([])
    const [ productVariants, setProductVariants ] = React.useState<ProductVariant[]>([]);
    const [ businessCategoryTypes, setBusinessCategoryTypes ] = React.useState<BusinessCategoryType[]>([]);
    const [ allProducts, setAllProducts ] = React.useState<Product[]>([]);
    const [ myProducts, setMyProducts ] = React.useState<Product[]>([]);
    const [ inputs, setInputs ] = React.useState<ProductInput>({
        business_id: '',
        product_type_id: '',
        category_id: '',
        sub_category_id: '',
        brand: '',
        title: '',
        weight: '',
        description: '',
        highlights: '',
        main_price: '',
        notes: '',
        production_country: '',
        images: [],
    })
    const [ variants, setVariants ] = React.useState<ProductInputVariant[]>([
        // {
        //     price: "45000",
        //     stock: "12",
        //     variants: [
        //         { variant_type_id: "1", variant: "Red" },
        //         { variant_type_id: "2", variant: "Big" },
        //     ],

        // }
    ])
    const [ variantInput, setVariantInput ] = React.useState<Record<any, any>>({});
    const [ table, setTable ] = React.useState<VariantTable>({
        tableHead: [],
        tableData: [],
    })
    const [ isAddVariant, setIsAddVariant ] = React.useState(true);
    const [ productFilter, setProductFilter ] = React.useState({
        page: 1,
    });
    const [ paginationData, setPaginationData ] = React.useState({
        totalResults: 0,
        totalPages: 0,
        page: 1,
        pageSize: 0,
    })
    const updateVariantIndex = React.useRef<number | null>(null);
    const variantContainerRef = React.useRef<HTMLDivElement>(null);

    const navigate = useNavigate();
    const { currentProduct } = useAppContext();

    const handleInput = (field: keyof typeof inputs, value: any) => {
        setInputs(prev => ({
            ...prev,
            [field]: value,
        }))
    }

    const handlePaginate = (page: number) => {
        setProductFilter(prev => ({
            ...prev,
            page
        }))
    }

    const handleVariantInput = (variant: ProductVariant, value: string) => {
        setVariantInput(prev => ({
            ...prev,
            [variant.id]: {
                name: variant.name,
                value, 
            }
        }))
    }

    const getProductCategory = async () => {
        try {
            const { data: response } = await axiosClient.get('/product/business/list-product-category');
            setProductCategories(response.data);
        } catch(error) {

        } finally {
            setIsLoading(prev => ({
                ...prev,
                productCategory: false
            }))
        }
    }

    const getProductSubCategory = async (categoryId: number) => {
        try {
            setIsLoading(prev => ({
                ...prev,
                productSubCategory: true
            }))

            const { data: response } = await axiosClient.get(`/product/business/list-product-sub-category?categoryId=${categoryId}`);
            setProductSubCategories(response.data);

        } catch(error) {
            
        } finally {
            setIsLoading(prev => ({
                ...prev,
                productSubCategory: false
            }))
        }
    }

    const getProductVariants = async (subCategoryId: number) => {
        try {
            setIsLoading(prev => ({
                ...prev,
                productVariants: true
            }))

            const defaultVariant = [
                {
                    id: -1,
                    name: 'Price',
                },
                {
                    id: -2,
                    name: 'Stock',
                },
            ]

            const { data: response } = await axiosClient.get(`/product/business/list-product-variants?subCategoryId=${subCategoryId}`);
            setProductVariants([
                ...defaultVariant,
                ...response.data
            ]);

        } catch(error) {
            
        } finally {
            setIsLoading(prev => ({
                ...prev,
                productVariants: false
            }))
        }
    }

    const getBusinessCategoryType = async () => {
        try {
            setIsLoading(prev => ({
                ...prev,
                productType: false
            }))

            const { data: response } = await axiosClient.get('/user/list-business-category-type');
            setBusinessCategoryTypes(response.data)
        } catch(error) {

        } finally {
            setIsLoading(prev => ({
                ...prev,
                productType: false
            }))
        }
    }

    const getMyProducts = async () => {
        try {
            setIsLoading(prev => ({
                ...prev,
                myProducts: true
            }))

            const { data: response } = await axiosClient.get('/product/business/list-product');
            setMyProducts(response.data.data);

        } catch(error) {

        } finally {
            setIsLoading(prev => ({
                ...prev,
                myProducts: false
            }))
        }
    }

    const getAllProducts = async (data: GetProductProps = {}) => {
        try {
            const { categoryId, subCategoryId } = data;

            setIsLoading(prev => ({
                ...prev,
                allProducts: true
            }))

            let products: Product[] = [];

            if(categoryId) {
                const { data: response } = await axiosClient.get(`product/product-by-category?categoryId=${categoryId}&page=${productFilter.page}`);
                const { data, pagination } = response.data;
                products = data;

                setPaginationData({
                    totalPages: pagination.total_page,
                    totalResults: pagination.total,
                    page: pagination.current_page,
                    pageSize: pagination.per_page,
                })

            } else if(subCategoryId) {
                const { data: response } = await axiosClient.get(`product/product-by-sub-category?subCategoryId=${subCategoryId}&page=${productFilter.page}`);
                const { data, pagination } = response.data;
                products = data;

                setPaginationData({
                    totalPages: pagination.total_page,
                    totalResults: pagination.total,
                    page: pagination.current_page,
                    pageSize: pagination.per_page,
                })
            } else {
                const { data: response } = await axiosClient.get('/product/all-products');
                products = response.data;
            }

            setAllProducts(products);

            return products;

        } catch(error) {
            return [];
        } finally {
            setIsLoading(prev => ({
                ...prev,
                allProducts: false
            }))
        }
    }

    const buildVariantFromInput = (
        variantInput: Record<string, { name: string; value: string }>
    ): {
            variant: ProductInputVariant;
            tableRow: string[];
            tableHead: string[];
        } => {
        const entries = Object.entries(variantInput);
        const variantValues = Object.values(variantInput).slice(0, 5);

        const tableHead = variantValues.map(item => item.name);
        const tableRow = variantValues.map(item => item.value);

        const price = variantInput["-1"]?.value || "0";
        const stock = variantInput["-2"]?.value || "0";

        const filteredVariants = entries
            .filter(([key]) => key !== "-1" && key !== "-2")
            .map(([key, item]) => ({
            variant_type_id: key,
            variant: item.value,
            }));

        return {
            variant: { price, stock, variants: filteredVariants },
            tableRow,
            tableHead,
        };
    };


    const handleAddVariant = (e: Event) => {
        e.preventDefault();

        const { variant, tableRow, tableHead } = buildVariantFromInput(variantInput);

        setVariants(prev => [...prev, variant]);
        setTable(prev => ({
            tableHead,
            tableData: [tableRow, ...prev.tableData],
        }));
    };


    const handleUpdateVariant = (e: Event) => {
        e.preventDefault();

        if (updateVariantIndex.current === null || updateVariantIndex.current === undefined) {
            return toast.error('Error updating variant');
        }

        const index = updateVariantIndex.current;
        const { variant, tableRow, tableHead } = buildVariantFromInput(variantInput);

        setVariants(prev => {
            const updated = [...prev];
            updated[index] = variant;
            return updated;
        });

        setTable(prev => {
            const updatedTableData = [...prev.tableData];
            updatedTableData[index] = tableRow;
            return {
                tableHead: prev.tableHead.length ? prev.tableHead : tableHead,
                tableData: updatedTableData,
            };
        });

        setIsAddVariant(true);
    };

    const handleDeleteVariant = (index: number) => {
        setTable(prev => ({
            ...prev,
            tableData: prev.tableData.filter((_, i) => i !== index),
        }));
        setVariants(prev => prev.filter((_, i) => i !== index))
    }

    const handleEditVariant = (index: number) => {
        setIsAddVariant(false);
        const variantValues = Object.values(variantInput);
        const tableData = table.tableData.filter((_, i) => i === index)[0];
        variantValues.forEach((item, i) => {
            const variant = productVariants.find(variant => variant.name === item.name);
            const value = tableData[i];

            handleVariantInput(variant!, value)
        });
        updateVariantIndex.current = index;
        variantContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleAddProduct = async () => {
        try {
            setIsLoading(prev => ({ ...prev, addProduct: true }));

            const payload = new FormData();

            // Add base product fields
            Object.entries(inputs).forEach(([key, value]) => {
                if (key === "images") {
                    value.forEach((file: File) => {
                        payload.append("images[]", file);
                    });
                } else {
                    payload.append(key, value);
                }
            });

            // Add variants using nested keys
            variants.forEach((variant, i) => {
                payload.append(`variants[${i}][price]`, variant.price);
                payload.append(`variants[${i}][stock]`, variant.stock);

                variant.variants.forEach((v, j) => {
                    payload.append(`variants[${i}][variants][${j}][variant_type_id]`, v.variant_type_id);
                    payload.append(`variants[${i}][variants][${j}][variant]`, v.variant);
                });
            });

            // 🧪 Optional debug
            // for (const [key, value] of payload.entries()) {
            //   console.log(`${key}: ${value}`);
            // }

            const { data: response }  = await axiosClient.post("/product/business/create-product", payload, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success(response.message);
            // navigate('/Goods/AllGoods');

        } catch (error: any) {
            toast.error(error.message || "Failed to add product");
        } finally {
            setIsLoading(prev => ({ ...prev, addProduct: false }));
        }
    };

    const handleDeleteProduct = async (productId: number, callback?: () => void) => {
        try {
            setIsLoading(prev => ({ ...prev, isSaving: true }));

            const { data: response } = await axiosClient.get(`product/business/delete-product?productId=${productId}`);

            setMyProducts(prev => prev.filter(item => item.productId !== productId));
            if(callback) callback();

            toast.success(response.message);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(prev => ({ ...prev, isSaving: false }));
        }
    }

    const initProductUpdate = () => {
        const product = currentProduct as Product;
        const {  
            title,
            description,
        } = product;

        // setInputs({
        //     title,
        //     brand: '',
        //     description,
        //     highlights
        // })
    }


    React.useEffect(() => {
        if(shouldGetCategory) getProductCategory();
        if(shouldGetBusinessCategoryType) getBusinessCategoryType();
        if(shouldGetAllProducts) getAllProducts();
        if(shouldGetMyProducts) getMyProducts();
        if(currentProduct) initProductUpdate();
    }, [])

    React.useEffect(() => {
        if(shouldGetAllProducts) getAllProducts();
        if(shouldGetMyProducts) getMyProducts();
    }, [productFilter])

    return {
        isLoading,
        inputs,
        productCategories,
        productSubCategories,
        productVariants,
        allProducts,
        myProducts,
        variantInput,
        table,
        variantContainerRef,
        isAddVariant,
        businessCategoryTypes,
        paginationData,
        getProductSubCategory,
        getProductVariants,
        handleInput,
        handleVariantInput,
        handleAddVariant,
        handleDeleteVariant,
        handleEditVariant,
        handleUpdateVariant,
        handleAddProduct,
        handleDeleteProduct,
        getAllProducts,
        handlePaginate,
    }
}

export default useProduct;