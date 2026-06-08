interface InfoCardProps {
    label: string;
    value?: string | null;
}

export default function InfoCard({
    label,
    value,
}: InfoCardProps) {
    return (
        <div
            className="
                bg-slate-50
                border
                rounded-xl
                p-4
            "
        >
            <p className="text-sm text-slate-500">
                {label}
            </p>

            <p className="mt-1 font-medium text-slate-800">
                {value || "-"}
            </p>
        </div>
    );
}