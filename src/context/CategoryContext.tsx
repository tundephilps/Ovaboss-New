import React, { ReactNode } from "react";
import useCategoryHook from "../hooks/useCategory";
import { Category, SubCategory } from "../types/category.type";
import { useParams } from "react-router-dom";

interface CategoryContextType {
    useCategory: ReturnType<typeof useCategoryHook>;
    selectedCategory: Category | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<Category | null>>;
    selectedSubCategory: SubCategory | null;
    setSelectedSubCategory: React.Dispatch<React.SetStateAction<SubCategory | null>>;
}

export const AppContext = React.createContext<CategoryContextType | undefined>(undefined);

interface AppContextProviderProps {
    children: ReactNode;
}

const CategoryContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [ selectedCategory, setSelectedCategory ] = React.useState<Category | null>(null);
    const [ selectedSubCategory, setSelectedSubCategory] = React.useState<SubCategory | null>(null);

    const useCategory = useCategoryHook();
    const params = useParams();
    
    const contextValue: CategoryContextType = {
        useCategory,
        selectedCategory,
        selectedSubCategory,
        setSelectedCategory,
        setSelectedSubCategory,
    };

    return (
        <AppContext.Provider value={contextValue}>
            { children }
        </AppContext.Provider>
    );
};

export const useCategoryContext = (): CategoryContextType => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("useCategoryContext must be used within an AppContextProvider");
    }

    return context;
};

export default CategoryContextProvider;
