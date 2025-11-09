
import React from 'react';

interface ActionCardProps {
    title: string;
    children: React.ReactNode;
    disabled?: boolean;
}

export const ActionCard: React.FC<ActionCardProps> = ({ title, children, disabled = false }) => {
    return (
        <div className={`relative bg-slate-800/50 border border-slate-700 rounded-lg p-5 transition-opacity duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>
            <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
            <div className={`${disabled ? 'pointer-events-none' : ''}`}>
                {children}
            </div>
            {disabled && <div className="absolute inset-0 rounded-lg" title="請先選擇一個 VHDX 檔案"></div>}
        </div>
    );
};
