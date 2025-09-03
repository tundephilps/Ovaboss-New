import React, { useEffect, useState } from "react";
import { ProductFullVariant } from "../../../types/product.type";
import { numberFormat } from "../../../utils";

interface VariantSelectorProps {
    productVariants: ProductFullVariant[];
    selectedVariantId?: number | null;
    onSelect: (v: ProductFullVariant) => void;
    currency?: string;
}

export default function VariantSelector({
    productVariants,
    selectedVariantId,
    onSelect,
    currency = "£",
}: VariantSelectorProps) {
    const [hoveredVariant, setHoveredVariant] = useState<ProductFullVariant | null>(null);

    // ✅ Auto-select if there is only 1 variant
    useEffect(() => {
        if (productVariants.length === 1) {
            onSelect(productVariants[0]);
        }
    }, [productVariants, onSelect]);

    // // ✅ No variants → use defaults (trigger once on mount)
    // useEffect(() => {
    //     if (productVariants.length === 0) {
    //         // you can decide how to pass product defaults (maybe null or a default object)
    //         onSelect({
    //             id: 0,
    //             price: 0,
    //             stock: 0,
    //             isActive: true,
    //             variants: [],
    //         } as ProductFullVariant);
    //     }
    // }, [productVariants, onSelect]);

    // if (productVariants.length === 0) {
    //     return (
    //         <p className="mt-3 text-sm text-gray-500 italic">
    //             No variants available. Using product defaults.
    //         </p>
    //     );
    // }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-3 relative">
            {productVariants.map((item) => {
                const isSelected = selectedVariantId === item.id;
                const outOfStock = item.stock <= 0 || !item.isActive;

                return (
                    <div
                        key={item.id}
                        className="relative"
                        onMouseEnter={() => setHoveredVariant(item)}
                        onMouseLeave={() => setHoveredVariant(null)}
                    >
                        <button
                            type="button"
                            onClick={() => onSelect(item)}
                            disabled={outOfStock}
                            className={[
                                "group relative w-full text-left rounded-xl border p-3 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
                                isSelected
                                    ? "ring-2 ring-yellow-500 border-yellow-400 bg-yellow-50"
                                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow",
                                outOfStock ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
                            ].join(" ")}
                        >
                            <div className="flex items-center gap-3">
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate">
                                        {currency + numberFormat(item.price, 2)}
                                    </p>
                                </div>

                                <span
                                    className={[
                                        "ml-auto h-5 w-5 rounded-full border flex items-center justify-center",
                                        isSelected ? "bg-yellow-500 border-yellow-500" : "border-gray-300",
                                    ].join(" ")}
                                    aria-hidden="true"
                                >
                                    {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
                                </span>
                            </div>

                            {/* Quick preview tags */}
                            <div className="mt-2 flex flex-wrap gap-1">
                                {item.variants.slice(0, 2).map((v) => (
                                    <span
                                        key={v.variantTypeId}
                                        className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-700"
                                    >
                                        {v.variantType}: {v.variant}
                                    </span>
                                ))}
                                {item.variants.length > 2 && (
                                    <span className="text-[11px] text-blue-600">+ more</span>
                                )}
                            </div>
                        </button>

                        {/* ✅ Hover details (tooltip style) */}
                        {hoveredVariant?.id === item.id && (
                            <div className="absolute left-0 top-full mt-2 w-64 rounded-lg bg-white shadow-lg border p-3 z-20">
                                <h3 className="text-sm font-medium text-gray-900 mb-2">
                                    Variant details
                                </h3>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-gray-600">Price</span>
                                    <span className="text-sm font-medium text-gray-900">
                                        {currency + numberFormat(item.price, 2)}
                                    </span>
                                </div>
                                <dl className="grid grid-cols-1 gap-y-1">
                                    {item.variants.map((v) => (
                                        <div key={v.variantTypeId} className="flex items-start gap-2">
                                            <dt className="text-xs text-gray-500 min-w-[80px]">
                                                {v.variantType}
                                            </dt>
                                            <dd className="text-sm text-gray-900">{v.variant}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
