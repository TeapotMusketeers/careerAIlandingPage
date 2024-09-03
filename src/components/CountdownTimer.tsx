"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CountdownTimer: React.FC = () => {
  const targetDate = '2024-09-12T00:00:00'; // Your target date

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 72),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative bg-gradient-to-b from-midnight-black via-deep-slate-gray to-midnight-black min-h-screen overflow-hidden">
      {/* Static glow effect */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className="w-[60%] aspect-square rounded-full bg-gradient-radial from-electric-cyan/20 via-electric-cyan/5 to-transparent"
          style={{ filter: 'blur(80px)' }}
        />
      </div>

      {/* Countdown Timer Section */}
      <motion.div
        className="w-full max-w-5xl bg-deep-slate-gray/80 backdrop-blur-md rounded-xl p-8 shadow-lg border border-electric-cyan/30 mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
            <h3 className="text-4xl font-bold text-electric-cyan mb-2">
              Only 20 spots left
            </h3>
            <p className="text-soft-white text-2xl">
              for the 60% discount!
            </p>
          </div>
          
          {/* Timer Section */}
          <div className="flex flex-row md:space-x-8 items-center md:w-1/2">
            <TimeUnit value={timeLeft.hours} label="Hours" max={72} />
            <TimeUnit value={timeLeft.minutes} label="Minutes" max={60} />
            <TimeUnit value={timeLeft.seconds} label="Seconds" max={60} />
          </div>
        </div>
      </motion.div>

      {/* Decorative element */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="w-256 h-256 rounded-full bg-electric-cyan opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeUnit = ({ value, label, max }: { value: number; label: string; max: number }) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 mb-2">
      <CircularProgressbar
        value={(value / max) * 100}
        text={`${value}`}
        styles={buildStyles({
          textColor: '#00FFFF',
          pathColor: '#00FFFF',
          trailColor: '#1E293B',
          textSize: '28px',
        })}
      />
    </div>
    <span className="text-soft-white text-sm">{label}</span>
  </div>
);

export default CountdownTimer;
