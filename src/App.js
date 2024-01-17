import { useState, useEffect } from "react";
import { clsx } from "clsx";
import logo from "./logo2.svg";

import img0 from "./poem_pics/0.jpg";
import img1 from "./poem_pics/1.png";
import img2 from "./poem_pics/2.png";
import img3 from "./poem_pics/3.png";
import img4 from "./poem_pics/4.png";
import img5 from "./poem_pics/5.png";

import "./App.css";

function App() {
	const [loadedIn, setLoadedIn] = useState(false);
	const [possessiveOn, setPossessiveOn] = useState(true);
	var fadeIn = loadedIn ? "opacity-100" : "opacity-0";
	const [selectedPoem, setSelectedPoem] = useState(null);

	const poems = [
		{
			title: "Happy Six Months <3",
			dark: false,
			lines: `Gorgeous, funny, and a climber too

…must be too good to be true.

Generous, kind, and a lover of stew

…must be too good to be true.

Driven, communicative, and likes to screw ;)

…must be too good to be true.

So many things… so I'll no longer eschew…

…I'm simply in love with you.

- Luca`,
			image: img0,
			special: true,
		},
		{
			title: "My Sunshine",
			dark: true,
			lines: `The first snow of winter
Your freshness cleared the haze
Through hail that crashed and days 
that flashed
I felt warmth underneath your gaze

My hot chocolate
The last sunset
A silver lining the greys
A simple smile can drive me wild 
and set my heart ablaze

With one week left
My hearts a mess
I'll be counting down the days
You might move on
No longer drawn
Your light was just a faze`,
			image: img1,
		},
		{
			title: "A (wo)man's best friend",
			dark: false,
			lines: `I used to be your everything
But now you've closed the door.
Came back with the young thing
Sprawled across my floor
I didn't know that walking me 
could feel like such a chore
No you're not a monster
You just don't love me anymore.

I wait, and I wait as my skin sags 
on the floor…
Longing and calling, staring at the door. 
I know you won't come back 
I can feel it in my core.
But I can't let go of splitting strings I 
never knew you tore

My life's meaning was just sleeping 
and sitting next to you.
But then you moved
Your life improved,
There was nothing I could do.
But who will hold me near and true when 
you've found something new?
I guess I’ll lay here 
death no longer feared, 
and let myself subdue.`,
			image: img2,
		},
		{
			title: "Stormy",
			dark: true,
			lines: `We always knew you belonged to the sky  

-12/20/21`,
			image: img3,
		},
		{
			title: "Sunkissed",
			dark: true,
			lines: `The Moon empties and fills my cup
It has one rule, keep looking up

The moonlight comforts me, it's even and cool 
It hides all my scars, and let's my tears pool

But sometimes The Moon leaves me feeling amiss
I give in to one look, or maybe a kiss

The moon can distract me, but the stars always stun
They give my life color and fields I can run

Although you have burned me, with fires like none, 
I can't live without you, since you are The Sun`,
			image: img4,
		},
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const numPoems = poems.length;

	useEffect(() => {
		/* Loading in poems  */

		/* Loading in title */
		const timer1 = setTimeout(() => {
			setLoadedIn(true);
		}, 500);
		const timer2 = setTimeout(() => {
			setPossessiveOn(false);
		}, 3500);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, []);

	return (
		<div
			id="all"
			className={clsx("transition-all", "border-1", "-full")}
			onClick={() => {
				setSelectedPoem(null);
			}}
		>
			<div className="py-4 px-4 shadow-lg pb-5" id="header">
				<div
					id="title"
					className={clsx(
						"flex flex-row items-center",
						false && "text-[#BA45FF]"
						// "gap-4"
					)}
				>
					{/* {loadedIn ? (
						<h1 className="italic text-xl">Avery's Poetic Place</h1>
					) : null} */}
					<img
						src={logo}
						alt=""
						className="w-[80px] h-[80px]"
						onClick={(e) => {
							e.stopPropagation();
							setSelectedPoem({
								title: "From Luca, with Love",
								dark: false,
								lines: ``,
								image: img5,
							});
							scrollToTop();
						}}
					/>
					<h1
						className={clsx(
							"pt-[48px] text-[30px] transition-all",
							!possessiveOn ? "ml-[-23px]" : "ml-[-8px]",
							fadeIn
						)}
					>
						very
						<span
							className={clsx(
								"inline-block transition-all",
								possessiveOn ? "w-0 opacity-0" : ""
							)}
						>
							's
						</span>{" "}
						<span className={possessiveOn ? "w-0 opacity-0" : ""}> </span>Poetic
						<span className={possessiveOn ? "w-0 opacity-0" : ""}> </span> Place
					</h1>
				</div>
			</div>
			{selectedPoem == null ? (
				<div
					className={clsx(
						fadeIn,
						"grid grid-cols-1",
						"gap-y-[100px] gap-x-[80px]",
						"lg:grid-cols-2",
						"sm:grid-cols-2",
						// "flex flex-col justify-center",
						"px-10",
						"py-10"
					)}
					id="content"
				>
					{poems.map((poem, i) => {
						return (
							<div
								onClick={(e) => {
									e.stopPropagation();
									setSelectedPoem(poem);
									scrollToTop();
								}}
								key={i}
								style={{
									backgroundImage: `url(${poem.image})`,
								}}
								className={clsx(
									"flex flex-col items-center justify-between text-center",
									"p-5",
									// "min-h-[300px]",
									"bg-cover bg-center bg-no-repeat ",
									"rounded-lg",
									"shadow hover:shadow-[] transition-all ease-in-out duration-250",
									"aspect-[9/12]",
									"hover:border-[10px] border-[#7D3C8A]",
									poem.special ? "w-100" : ""
									// poem.special ? "brightness-50" : ""
									// [0_35px_60px_-15px_rgba(0,0,0,0.3)]
									// "h-[200px] w-[200px]"
								)}
							>
								<div className="h-[15%] flex flex-col justify-center">
									<h1
										className={clsx(
											"text-[27px]",
											poem.dark ? "text-[black]" : "text-[white]",
											poem.special ? "backdrop-blur-md rounded-lg p-3" : ""
										)}
									>
										{poem.title}
									</h1>
								</div>
								{/* <h1>{poem.title}</h1> */}
								{/* <p className="">{poem.lines}</p> */}
								<div className="h-[85%] p-5">
									{!poem.special ? (
										<pre
											className={clsx(
												poem.dark ? "text-[black]" : "text-[white]",
												"text-[17px]",
												// poem.special ? "bg-clip-content bg-white rounded-sm" : ""
												poem.special ? "backdrop-blur-md rounded-lg p-3" : ""
											)}
										>
											{poem.lines.split("\n").slice(0, 4).join("\n")}
											{poem.lines.split("\n").length > 4 ? (
												<span className="text-[40px]">{"\n⋮"}</span>
											) : (
												""
											)}
										</pre>
									) : (
										<pre
											className={clsx(
												poem.dark ? "text-[black]" : "text-[white]",
												"text-[17px]",
												// poem.special ? "bg-clip-content bg-white rounded-sm" : ""
												poem.special ? "backdrop-blur-md rounded-lg p-3" : ""
											)}
										>
											(click here to see poem)
										</pre>
									)}
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="flex flex-col p-10 items-center justify-center">
					<div
						onClick={(e) => {
							e.stopPropagation();
						}}
						style={{
							backgroundImage: `url(${selectedPoem.image})`,
						}}
						className={clsx(
							// "flex flex-col items-center justify-between text-center",
							"text-center",
							"py-8",
							// "w-[100%] h-[100%]",
							// "aspect-[9/12]",
							"min-h-screen",
							"w-[95%]",
							"lg:w-[50%]",
							"sm:w-[65%]",
							"bg-cover bg-center bg-no-repeat ",
							"rounded-lg",
							// "shadow hover:shadow-[] transition-all ease-in-out duration-250",
							"border-[10px] border-[#7D3C8A]"
						)}
					>
						<div className="h-[15%] flex flex-col justify-center">
							<pre
								className={clsx(
									"text-[28px] lg:text-[32px] mb-4",
									selectedPoem.dark ? "text-[black]" : "text-[white]",
									selectedPoem.special ? "backdrop-blur-md rounded-lg p-3" : ""
								)}
							>
								{selectedPoem.title}
							</pre>
						</div>
						{/* <h1>{poem.title}</h1> */}
						{/* <p className="">{poem.lines}</p> */}
						<div className="h-[85%] py-5">
							<pre
								className={clsx(
									"text-[" + selectedPoem.color + "] ",
									"lg:text-[22px]",
									"text-center",
									selectedPoem.dark ? "text-[black]" : "text-[white]",
									selectedPoem.special
										? "backdrop-blur-md rounded-lg p-3 font-semibold"
										: ""
								)}
							>
								{selectedPoem.lines}
							</pre>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
