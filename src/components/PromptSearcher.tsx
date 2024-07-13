"use client";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Spinner from "./Spinner";
import { motion } from "framer-motion";

interface Prompt {
  _id: string;
  prompt: string;
  link: string;
  image_url?: string; // Assuming image_url might be optional
}

const PromptSearcher = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [copyId, setCopyId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/getprompts?prompt=${encodeURIComponent(searchQuery)}`);
      setPrompts(response.data.prompts);
    } catch (error) {
      console.error("Error fetching prompts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopyId(id);
    setTimeout(() => {
      setCopyId(null);
    }, 3000);
  };

  const promptVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-[90vh] py-16 lg:py-32 bg-transparent">
      <div
        className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-20"
      ></div>
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl my-4 font-bold tracking-tight">PromptHub</h1>
        <form className="flex items-center gap-2 mb-8">
          <Input
            type="search"
            placeholder="Search prompts..."
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-muted rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Button
            onClick={(e) => {
              searchQuery.length > 2 ? handleSearch(e) : null;
            }}
            disabled={isLoading}
            className="bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {isLoading ? <>Search <Spinner /></> : "Search "}
          </Button>
        </form>
        <div className="space-y-4">
          {prompts.length === 0 && <h1>Search some prompts</h1>}
          {prompts.map((prompt, index) => (
            <motion.div
              key={prompt._id}
              variants={promptVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-8 bg-card p-4 rounded-md hover:bg-card/80 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-foreground">{prompt.prompt}</h3>
              </div>
              <Button
                onClick={() => handleCopy(prompt.prompt, prompt._id)}
                className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                {copyId === prompt._id ? "Copied" : "Copy"}
              </Button>
              <Link target="_blank" href={prompt.link} className={buttonVariants()}>View</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptSearcher;
