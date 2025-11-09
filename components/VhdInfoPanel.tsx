
import React from 'react';
import type { VhdInfo } from '../types';

interface VhdInfoPanelProps {
    info: VhdInfo | null;
}

const InfoRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
        <dt className="text-sm text-slate-400">{label}</dt>
        <dd className="text-sm font-medium text-white">{value}</dd>
    </div>
);


export const VhdInfoPanel: React.FC<VhdInfoPanelProps> = ({ info }) => {
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-md font-semibold text-white mb-3">VHDX 資訊</h3>
            {info ? (
                <dl>
                    <InfoRow label="檔案路徑" value={info.Path} />
                    <InfoRow label="檔案大小" value={info.Size} />
                    <InfoRow 
                        label="掛載狀態" 
                        value={
                            info.Attached 
                                ? <span className="text-green-400">已掛載</span> 
                                : <span className="text-red-400">未掛載</span>
                        } 
                    />
                    <InfoRow label="掛載點" value={info.MountPoint || 'N/A'} />
                </dl>
            ) : (
                <p className="text-sm text-slate-500">請選擇一個檔案並點擊「顯示資訊」以檢視詳細資料。</p>
            )}
        </div>
    );
};
