interface CardProps {
    title: string;
    description: string;
    image: string;
}

export default function Card({
    title,
    description,
    image
}: CardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">

            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
            />

            <div className="p-6">

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    {title}
                </h2>

                <p className="text-slate-600 leading-relaxed">
                    {description}
                </p>

                <button className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Learn More
                </button>

            </div>
        </div>
    );
}