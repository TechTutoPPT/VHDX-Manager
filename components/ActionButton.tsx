import React from 'react';

interface ActionButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    // Fix: Replaced `() => JSX.Element` with `React.FC` to resolve "Cannot find namespace 'JSX'" error.
    icon?: React.FC;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children, icon: Icon, variant = 'primary', disabled = false }) => {
    const baseClasses = "flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
    const variantClasses = {
        primary: 'bg-accent hover:bg-accent-hover text-accent-foreground shadow-sm disabled:bg-slate-600 disabled:cursor-not-allowed',
        secondary: 'bg-slate-700 hover:bg-slate-600 text-slate-100 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]}`}
        >
            {Icon && <Icon />}
            <span>{children}</span>
        </button>
    );
};