import React, { useState, useEffect } from 'react';

interface CommandOutputProps {
    command: string;
}

export const CommandOutput: React.FC<CommandOutputProps> = ({ command }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
    };

    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-md font-semibold text-white mb-2">複製並執行指令</h3>
            <div className="relative bg-slate-900 rounded-md p-4">
                <pre className="text-sm text-cyan-300 whitespace-pre-wrap break-all">
                    <code>{command}</code>
                </pre>
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1 text-xs rounded-md transition-colors"
                >
                    {copied ? '已複製!' : '複製'}
                </button>
            </div>
             <p className="text-xs text-slate-500 mt-2">
                複製上方指令，然後以系統管理員身分在 PowerShell 中執行。
            </p>
        </div>
    );
};