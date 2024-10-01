"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useState, useEffect } from "react";
import { FaUsers, FaTrophy, FaCar, FaGraduationCap } from 'react-icons/fa';
import { PinContainer } from "@/components/ui/3d-pin";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Legend } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const achievements = [
    { title: "Cars Built", count: 9, icon: FaCar },
    { title: "Awards Won", count: 26, icon: FaTrophy },
    { title: "National Championships", count: 2, icon: FaTrophy },
    { title: "Years of Excellence", count: 10, icon: FaGraduationCap },
  ];

  const chartData = [
    { event: "Dynamic Events", value: 675, fill: "hsl(var(--chart-1))" },
    { event: "Static Events", value: 325, fill: "hsl(var(--chart-2))" },
  ];

  const staticEventsData = [
    { name: "Cost Report", value: 100 },
    { name: "Business Plan", value: 75 },
    { name: "Design", value: 150 },
  ];

  const dynamicEventsData = [
    { name: "Acceleration", value: 100 },
    { name: "Skid Pad", value: 75 },
    { name: "Autocross", value: 125 },
    { name: "Endurance", value: 275 },
    { name: "Efficiency", value: 100 },
  ];

  const COLORS_STATIC = ["#0088FE", "#00C49F", "#FFBB28"];
  const COLORS_DYNAMIC = ["#FF8042", "#FF4242", "#42C0FF", "#8884D8", "#82CA9D"];

  const chartConfig = {
    value: {
      label: "Points",
    },
    "Dynamic Events": {
      label: "Dynamic Events",
      color: "hsl(var(--chart-1))",
    },
    "Static Events": {
      label: "Static Events",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center gap-8 md:gap-12"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
          >
            ABOUT US
          </motion.h1>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <BackgroundGradient className="rounded-3xl p-1">
              <div className="bg-white border-none shadow-lg rounded-3xl">
                <div className="p-0">
                  <div
                    className="relative overflow-hidden rounded-3xl aspect-[16/9] sm:aspect-[16/6] md:aspect-[16/6]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Image
                      src="/images/about.png"
                      alt="Camber Racing Team"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-110"
                      priority
                    />
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        >
                          <p className="text-xl md:text-3xl font-bold text-white">Camber Racing Team</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          <div className="w-full space-y-6">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-justify"
            >
              Camber Racing is the Formula Student combustion team of SRM IST, Chennai. The team was founded in 2009 when a group of young engineers decided to turn their dreams into reality and went on to make the first prototype, &quot;CR800&quot;. Since then, there has been no looking back. Nine cars, 26 awards and 2 times National Champions.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-justify"
            >
              The team comprises of passionate Undergraduate students from various disciplines and gives them a platform to apply and test their skills to the fullest. The team has been participating in various competitions, namely Formula Student Germany, Formula Bharat and Supra SAE India under the Combustion class for 10 glorious years.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255, 0, 0, 0)",
                    "0 0 0 10px rgba(255, 0, 0, 0.1)",
                    "0 0 0 20px rgba(255, 0, 0, 0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Badge variant="outline" className="text-red-500 border-red-500 text-lg p-4">
                  Our Goal: Building people, not just Cars!
                </Badge>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full mt-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
              {achievements.map((achievement, index) => (
                <PinContainer key={index} title={achievement.title}>
                  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[16rem] h-[8rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                      {achievement.title}
                    </h3>
                    <div className="mt-1 text-2xl font-bold text-slate-100 flex items-center">
                      {achievement.icon && <achievement.icon className="text-red-500 mr-2" />}
                      <span>{achievement.count}</span>
                    </div>
                  </div>
                </PinContainer>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full mt-8"
          >
            <h2 className="text-4xl font-bold mb-20 text-center text-red-600">Formula Student Events</h2>
            <div className="w-full mb-8">
              <BackgroundGradient className="rounded-3xl p-1">
                <div className="bg-white border-none shadow-lg rounded-3xl">
                  <div className="p-0 mb-4">
                    <div className="relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[16/5]">
                      <Image
                        src="/images/about2.png"
                        alt="Formula Student Events"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-110"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
            <div className="text-lg text-justify mb-8">
              <p>Formula Student is the largest student design engineering competition sanctioned by the Society of Automobile Engineers (SAE). Founded in 1998 in the United States of America, it now has several competitions in various countries around the globe throughout the year. This competition has an objective to enable the student to design and fabricate an &ldquo;Open Wheeled Weekend Racer&rdquo; meeting certain standards and rules. The best team is not the one with the fastest car, but rather the one with cost-efficient manufacturing and feasible financial statements and sales pitches.</p>
              <p className="mt-4">The Competition has been divided into 2 sets of events, Dynamic and Static. The dynamic events include all the on-track bouts like Skid-Pad, Acceleration, Autocross and Endurance. The static events include a business plan and marketing strategy which tests cost analysis presentation.</p>
              <p className="mt-4">Formula Student challenges the team members to go the extra mile in their education by enriching it with the real-life experience of what it takes to build and manufacture an industry-ready racecar while considering the economic aspects of the automotive industry. Teams operate under the assumption that they are a manufacturer developing a prototype to be evaluated for production. The target audience is the non-professional Weekend-Racer. The racecar must be equipped with characteristics such as acceleration, braking and handling.</p>
              <p className="mt-4">Teams face the challenge of composing a complete package consisting of a well-constructed racecar and a sales plan that best matches the given criteria. The decision is made by a jury of experts from the motorsport, automotive and supplier industries. The jury will judge every team&apos;s car and sales plan based on construction, cost planning and sales presentation. The rest of the judging will be done out on the track, where the students demonstrate in several performance tests how well their self-built racecars fare in the real environment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="border-4 border-black border-dashed bg-opacity-20 backdrop-filter backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle>Static Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={staticEventsData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name }) => `${name}`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {staticEventsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS_STATIC[index % COLORS_STATIC.length]} />
                          ))}
                        </Pie>
                        <Legend formatter={(value, entry, index) => value} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="border-4 border-black border-dashed bg-opacity-20 backdrop-filter backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle>Dynamic Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={dynamicEventsData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name }) => `${name}`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {dynamicEventsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS_DYNAMIC[index % COLORS_DYNAMIC.length]} />
                          ))}
                        </Pie>
                        <Legend formatter={(value, entry, index) => value} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
