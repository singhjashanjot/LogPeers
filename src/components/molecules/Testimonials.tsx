import { cn } from "@/lib/utils";
import Marquee from "@/components/atoms/marquee";

const reviews = [
    {
        name: "Jashanjot Singh",
        username: "@singhjashanjot",
        body: "A game-changer! Absolutely phenomenal!",
        img: "https://avatars.githubusercontent.com/u/161365081?v=4",
    },
    {
        name: "Gursimran Singh",
        username: "@gursimrxnsingh",
        body: "Incredible! Exceeded all my expectations.",
        img: "https://avatars.githubusercontent.com/u/135122793?v=4",
    },
    {
        name: "Krrxshh",
        username: "@Krrxshh",
        body: "Impressive work! Great attention to detail.",
        img: "https://avatars.githubusercontent.com/u/174702812?v=4",
    },
    {
        name: "Simarjeet Singh",
        username: "@singhsimxr",
        body: "Absolutely speechless! Highly recommend!",
        img: "https://avatars.githubusercontent.com/u/149098685?v=4",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "Fantastic experience! Truly impressive!",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "Thankful for the amazing community support!",
        img: "https://avatar.vercel.sh/james",
    },
];

interface Review {
    name: string;
    username: string;
    body: string;
    img: string;
}

// funcion to shuffle the reviews
const shuffleArray = (array: Review[]): Review[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
};


const shuffledReviews = shuffleArray([...reviews]);
const firstRow = shuffledReviews.slice(0, Math.ceil(shuffledReviews.length / 2));
const secondRow = shuffledReviews.slice(Math.ceil(shuffledReviews.length / 2));

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export default function Testimonials() {
    return (
        <div>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background ">
                <h1 className="crazyfont pointer-events-none font-bold whitespace-pre-wrap bg-gradient-to-b from-black via-gray-900 to-gray-700 bg-clip-text text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl leading-tight sm:leading-snug md:leading-none text-transparent dark:from-white dark:via-gray-300 dark:to-gray-500/80 py-10 mx-6">
                    Here Is What Our Users Have To Say About Us.
                </h1>

                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
    );
}
