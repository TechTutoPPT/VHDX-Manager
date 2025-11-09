
import React from 'react';

export const Disclaimer: React.FC = () => {
    return (
        <div className="bg-yellow-900/30 border border-yellow-700 text-yellow-200 px-4 py-3 rounded-lg relative mb-6" role="alert">
            <strong className="font-bold">重要提示：</strong>
            <span className="block sm:inline ml-2">此工具僅用於<strong className="font-semibold">產生 PowerShell 指令</strong>。</span>
            <p className="text-sm mt-1">
                出於安全考量，網頁應用程式無法直接在您的電腦上執行這些指令。請複製產生的指令，並以<strong className="font-semibold">系統管理員身分</strong>在 Windows PowerShell 終端機中手動執行。
            </p>
        </div>
    );
};
