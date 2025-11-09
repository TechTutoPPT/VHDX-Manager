import React, { forwardRef } from 'react';

interface FileSelectorProps {
    onFileSelect: (file: File) => void;
    selectedFile: File | null;
}

export const FileSelector = forwardRef<HTMLInputElement, FileSelectorProps>(({ onFileSelect, selectedFile }, ref) => {
    
    const handleButtonClick = () => {
        if (ref && typeof ref !== 'function' && ref.current) {
            ref.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.name.toLowerCase().endsWith('.vhdx')) {
            onFileSelect(file);
        } else if (file) {
            alert('請選擇一個有效的 .vhdx 檔案。');
        }
    };

    return (
        <div className="flex items-center gap-4 flex-wrap">
            <input
                type="file"
                ref={ref}
                onChange={handleFileChange}
                className="hidden"
                accept=".vhdx"
            />
            <button
                onClick={handleButtonClick}
                className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium py-2 px-4 rounded-md transition-colors"
            >
                選擇現有 VHDX 檔案
            </button>
            {selectedFile && (
                <p className="text-sm text-slate-300">
                    已選擇檔案: <span className="font-medium text-accent-foreground bg-slate-700 px-2 py-1 rounded">{selectedFile.name}</span>
                </p>
            )}
        </div>
    );
});