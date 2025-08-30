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
    const [isOpen, setIsOpen] = useState(false);
    const [activeVariant, setActiveVariant] = useState<ProductFullVariant | null>(null);

    const openModal = (v: ProductFullVariant) => {
        setActiveVariant(v);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        // keep activeVariant so user can re-open quickly; or clear if you prefer
    };

    const confirmSelect = () => {
        if (activeVariant) onSelect(activeVariant);
        setIsOpen(false);
    };

    // close on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    return (
        <>
            {/* Button Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-3">
                {productVariants.map((item) => {
                    const isSelected = selectedVariantId === item.id;
                    const outOfStock = item.stock <= 0 || !item.isActive;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => openModal(item)}
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
                                    {/* <p className="text-xs text-gray-500">
                                        Stock: {item.stock}
                                    </p> */}
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

                            {/* quick peek of first two attributes */}
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
                    );
                })}
            </div>

            {/* Modal */}
            {isOpen && activeVariant && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
                        onClick={closeModal}
                    />
                    {/* panel */}
                    <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
                        <div className="px-5 py-4 border-b">
                            <h2 className="text-base font-semibold text-gray-900">
                                Variant details
                            </h2>
                            <p className="mt-1 text-xs text-gray-500">
                                Review this option and confirm to select.
                            </p>
                        </div>

                        <div className="px-5 py-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Price</span>
                                <span className="text-sm font-medium text-gray-900">
                                    {currency + numberFormat(activeVariant.price, 2)}
                                </span>
                            </div>
                            {/* <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Stock</span>
                                <span className="text-sm font-medium text-gray-900">
                                    {activeVariant.stock}
                                </span>
                            </div> */}

                            <div className="pt-2">
                                <h3 className="text-sm font-medium text-gray-900 mb-2">
                                    Attributes
                                </h3>
                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                    {activeVariant.variants.map((v) => (
                                        <div key={v.variantTypeId} className="flex items-start gap-2">
                                            <dt className="text-xs text-gray-500 min-w-[100px]">
                                                {v.variantType}
                                            </dt>
                                            <dd className="text-sm text-gray-900">{v.variant}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>

                        <div className="px-5 py-4 border-t flex items-center justify-end gap-3">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                onClick={confirmSelect}
                                className="inline-flex items-center rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                            >
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
