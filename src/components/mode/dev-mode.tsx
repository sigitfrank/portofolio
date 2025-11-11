import React, { useState, useEffect, useRef } from 'react';
import { skillList, experienceList, projects } from '../../namespace';
import { SiCodewars, SiGithub, SiGmail, SiInstagram, SiLinkedin } from 'react-icons/si';
import '../../css/dev-mode.css'
import { FiLoader } from 'react-icons/fi';
import { RiLoader2Fill } from 'react-icons/ri';

interface Message {
    type: 'user' | 'ai';
    text: string;
    isTyping?: boolean;
}

const DevMode: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            type: 'ai',
            text: 'Welcome! Type a command to learn more about me.\n\nAvailable commands:\n• skills - View my technical skills\n• projects - See my projects\n• experiences - Check my work experience\n• achievements - View my achievements and awards\n• clear - Clear the terminal\n• help - Show this message again',
        },
    ]);
    const [currentTypingIndex, setCurrentTypingIndex] = useState<number | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Generate responses from namespace data
    const generateSkillsResponse = (): string => {
        const categories = {
            'Frontend': ['JavaScript', 'TypeScript', 'ReactJS', 'Next.js', 'ReactNative', 'Material UI', 'TailwindCSS'],
            'Backend': ['NodeJS', 'ExpressJS', 'NestJS', 'Laravel'],
            'Database': ['MySQL', 'MongoDB', 'Supabase', 'PostgreSQL'],
            'State Management': ['Zustand', 'Redux', 'MobX'],
            'Others': ['GraphQL', 'Web Socket']
        };

        let response = 'My Technical Skills:\n\n';

        Object.entries(categories).forEach(([category, skills]) => {
            const categorySkills = skillList
                .filter(skill => skills.includes(skill.label))
                .map(skill => skill.label)
                .join(', ');

            if (categorySkills) {
                response += `${category}:\n• ${categorySkills}\n\n`;
            }
        });

        // Add additional skills not in skillList
        response += 'Frontend:\n• Next.js\n\n';
        response += 'Backend:\n• NestJS\n\n';
        response += 'Database:\n• Supabase\n\n';

        return response.trim();
    };

    const generateExperiencesResponse = (): string => {
        let response = 'Professional Experience:\n\n';

        experienceList.forEach((exp, index) => {
            response += `${exp.label}\n`;
            response += `${exp.position} | ${exp.status}\n`;
            response += `${exp.duration}\n`;
            response += `🔗 ${exp.link}\n`;
            if (index < experienceList.length - 1) response += '\n';
        });

        return response;
    };

    const generateProjectsResponse = (): string => {
        let response = 'Featured Projects:\n\n';

        projects.forEach((project, index) => {
            response += `${index + 1}. ${project.label}\n\n`;
            response += 'Key Achievements:\n';
            project.jobdesc.slice(0, 3).forEach(desc => {
                response += `• ${desc}\n`;
            });
            response += '\nFeatures Delivered:\n';
            project.list.slice(0, 4).forEach(item => {
                response += `• ${item}\n`;
            });
            if (index < projects.length - 1) response += '\n';
        });

        return response;
    };

    // AI Response Data
    const responses: { [key: string]: string } = {
        skills: generateSkillsResponse(),
        experiences: generateExperiencesResponse(),
        projects: generateProjectsResponse(),

        achievements: `Achievements & Awards:

🏆 Outstanding Proactivity and Initiative Developer of the Year 2024
   • Honored by AiChat Pte Ltd for exceptional contributions

🎓 AiChat Certificate of Achievement 2024
   • Recognition for excellence in development

🏆 Runner Up Codig 2.0
   • Competitive programming achievement

� Finalist IT FEST 3.0
   • Demonstrated technical excellence in competition

📊 Career Growth
   • Achieved promotion within 1.5 years at Astronacci International

� Critical Problem Solver
   • Successfully resolved hard-to-replicate issues in production`,

        help: `Available commands:
• skills - View my technical skills
• projects - See my projects
• experiences - Check my work experience
• achievements - View my achievements and awards
• clear - Clear the terminal
• help - Show this message again

Type any command to get started!`,
    };

    const handleCommand = (command: string) => {
        const cmd = command.toLowerCase().trim();

        // Add user message
        setMessages((prev) => [...prev, { type: 'user', text: command }]);

        // Handle clear command
        if (cmd === 'clear') {
            setTimeout(() => {
                setMessages([
                    {
                        type: 'ai',
                        text: 'Terminal cleared. Type "help" to see available commands.',
                    },
                ]);
            }, 300);
            return;
        }

        // Get AI response
        const response = responses[cmd];
        if (response) {
            const newMessage: Message = {
                type: 'ai',
                text: response,
                isTyping: true,
            };
            setMessages((prev) => [...prev, newMessage]);
            setCurrentTypingIndex(messages.length + 1);
        } else {
            setMessages((prev) => [
                ...prev,
                {
                    type: 'ai',
                    text: `Command "${command}" not recognized. Type "help" to see available commands.`,
                },
            ]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            handleCommand(input);
            setInput('');
        }
    };

    // Typing animation effect
    const TypingMessage: React.FC<{ text: string; index: number }> = ({ text, index }) => {
        const [displayedText, setDisplayedText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + text[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                }, 10);
                return () => clearTimeout(timeout);
            } else {
                // Mark typing as complete
                setCurrentTypingIndex(null);
            }
        }, [currentIndex, text]);

        return <pre className="whitespace-pre-wrap font-mono">{displayedText}</pre>;
    };

    return (
        <div className="min-h-screen relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/background.jpg)' }}
            />
            <div className="absolute inset-0 bg-linear-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95" />

            <div className="relative z-10 w-full max-w-7xl md:h-[85vh] bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
                <div className="grid md:grid-cols-2 gap-0 md:h-full">
                    {/* Left Section - Profile */}
                    <div className="relative bg-linear-to-br from-gray-800/30 to-gray-900/30 p-12 flex flex-col items-center justify-center border-r border-gray-700/50 overflow-hidden">

                        {/* Content */}
                        <div className="relative z-10 text-center space-y-6">
                            {/* Profile Picture */}
                            <div className="flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full bg-linear-to-br from-gray-900 to-white p-1 shadow-2xl relative">
                                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/assets/me-2.jpg"
                                            alt="Sigit Tunggul Waskito"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center">
                                        <span className="text-xl relative bottom-[3px]">👋</span>
                                    </div>
                                </div>
                            </div>

                            {/* Name and Title */}
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold text-white tracking-tight">
                                    Sigit Tunggul Waskito
                                </h1>
                                <p className="text-xl text-blue-400 font-medium">
                                    Front-End Developer
                                </p>
                            </div>

                            {/* Contact Info */}
                            <a
                                href="mailto:sigittunggul.w@gmail.com"
                                className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors !no-underline"
                            >
                                <SiGmail className='text-white' />
                                <span className="text-sm text-white">sigittunggul.w@gmail.com</span>
                            </a>

                            {/* Social Links */}
                            <div className="pt-2 flex justify-center gap-4">
                                <a
                                    href="https://github.com/sigitfrank"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-blue-500 transition-all duration-300 group"
                                    title="GitHub"
                                >
                                    <SiGithub className='text-white' />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/sigittuw/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-blue-500 transition-all duration-300 group"
                                    title="LinkedIn"
                                >
                                    <SiLinkedin className='text-white' />
                                </a>
                                <a
                                    href="https://www.instagram.com/sigit_frank/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-linear-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group"
                                    title="Instagram"
                                >
                                    <SiInstagram className='text-white' />
                                </a>
                                <a
                                    href="https://www.codewars.com/users/sigitfrank"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-red-600 transition-all duration-300 group"
                                    title="Codewars"
                                >
                                    <SiCodewars style={{ borderRadius: '50%' }} className='text-white' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Terminal */}
                    <div className="bg-gray-900 flex flex-col h-auto md:h-[600px] overflow-auto">
                        {/* Terminal Header */}
                        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-400 text-sm ml-4">sigit@portfolio:~</span>
                        </div>

                        {/* Terminal Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 font-mono text-sm">
                            {messages.map((message, index) => (
                                <div key={index}>
                                    {message.type === 'user' ? (
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-400">{`>`}</span>
                                            <span className="text-gray-100">{message.text}</span>
                                        </div>
                                    ) : (
                                        <div className="text-blue-300 pl-4">
                                            {message.isTyping && index === currentTypingIndex ? (
                                                <TypingMessage text={message.text} index={index} />
                                            ) : (
                                                <pre className="whitespace-pre-wrap font-mono">{message.text}</pre>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Terminal Input */}
                        <div className="bg-gray-800 px-4 py-3 border-t border-gray-700">
                            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                                <span className="text-green-400 font-mono">{`>`}</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-transparent text-gray-100 outline-none font-mono placeholder-gray-500"
                                    placeholder="Type available command..."
                                    autoFocus
                                    disabled={currentTypingIndex !== null}
                                />
                                <RiLoader2Fill className={`w-4 h-4 text-gray-400 ${currentTypingIndex !== null ? 'animate-spin' : 'hidden'}`} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevMode;
