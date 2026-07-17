const aiTools = [
<<<<<<< HEAD
  { 
    id: 1,  
    slug: "chatgpt",
    name: "ChatGPT",
    category: "Chatbot",          
    company: "OpenAI",          
    pricing: "Free & Paid", 
    description: "A conversational AI assistant that can answer questions, write content, explain code, and help with everyday tasks through natural chat.", 
    features: ["Natural language chat", "Code help & debugging", "Custom GPTs", "Voice mode", "Web browsing"], 
    website: "https://chat.openai.com", image: "assets/logos/chatgpt-icon.svg" 
  },

  { id: 2,  slug: "claude",     
     name: "Claude",         
     category: "Chatbot",          
     company: "Anthropic",       
     pricing: "Free & Paid", 
     description: "An AI assistant focused on helpful, honest, and safe conversation, strong reasoning, and long-context document understanding.", 
     features: ["Large context window", "Artifacts & documents", "Strong reasoning", "Vision support", "Projects"], 
     website: "https://claude.ai", 
     image: "assets/logos/claude-ai-icon.svg" 
    },
  { id: 3,  slug: "gemini",        name: "Gemini",         category: "Chatbot",          company: "Google",          pricing: "Free & Paid", description: "Google's multimodal AI model that understands text, images, and code, and integrates directly with Google Workspace apps.", features: ["Multimodal input", "Workspace integration", "Live conversation mode", "Image understanding"], website: "https://gemini.google.com", image: "assets/logos/google-gemini-icon.svg" },
  { id: 4,  slug: "deepseek",      name: "DeepSeek",       category: "Chatbot",          company: "DeepSeek AI",     pricing: "Free & Paid", description: "An open and efficient large language model known for strong reasoning performance at a lower computational cost.", features: ["Open-weight models", "Strong reasoning", "Code generation", "Low cost API"], website: "https://www.deepseek.com", image: "assets/logos/deepseek-logo-icon.svg" },
  { id: 5,  slug: "perplexity-ai", name: "Perplexity AI",  category: "Research",         company: "Perplexity",      pricing: "Free & Paid", description: "An AI-powered answer engine that searches the web in real time and returns cited, source-backed answers to questions.", features: ["Real-time web search", "Cited sources", "Follow-up questions", "Focus modes"], website: "https://www.perplexity.ai", image: "assets/logos/perplexity-ai-icon.svg" },
  { id: 6,  slug: "elicit",        name: "Elicit",         category: "Research",         company: "Elicit",          pricing: "Free & Paid", description: "A research assistant that helps find, summarize, and extract data from academic papers to speed up literature reviews.", features: ["Paper search", "Auto summaries", "Data extraction tables", "Citation tracking"], website: "https://elicit.com", image: "https://cdn.brandfetch.io/id-hXB9tqs/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1781728463300" },

  { id: 7,  slug: "github-copilot",name: "GitHub Copilot", category: "Coding",           company: "GitHub / OpenAI", pricing: "Free & Paid", description: "An AI pair programmer that suggests code, whole functions, and tests directly inside your editor as you type.", features: ["Inline code suggestions", "Chat in IDE", "Multi-language support", "Test generation"], website: "https://github.com/features/copilot", image: "assets/logos/github-copilot-icon.svg" },
  { id: 8,  slug: "cursor",        name: "Cursor",         category: "Coding",           company: "Anysphere",       pricing: "Free & Paid", description: "An AI-first code editor built on VS Code that can write, edit, and refactor entire codebases through natural language.", features: ["Codebase-aware chat", "Multi-file edits", "AI autocomplete", "Terminal AI"], website: "https://www.cursor.com", image: "assets/logos/cursor-ai-code-icon.svg" },
  { id: 9,  slug: "windsurf",      name: "Windsurf",       category: "Coding",           company: "Codeium",         pricing: "Free & Paid", description: "An agentic coding IDE that plans and executes multi-step coding tasks across a project with minimal manual guidance.", features: ["Agentic workflows", "Multi-file awareness", "Fast autocomplete", "Built-in chat"], website: "https://codeium.com/windsurf", image: "assets/logos/windsurf-icon.svg" },

  { id: 10, slug: "midjourney",    name: "Midjourney",     category: "Image Generation", company: "Midjourney Inc.", pricing: "Paid",        description: "An AI image generator known for producing highly artistic, stylized visuals from simple text prompts.", features: ["Text-to-image", "Style tuning", "Upscaling", "Community gallery"], website: "https://www.midjourney.com", image: "assets/logos/midjourney-color-icon.svg" },
  { id: 11, slug: "dalle",         name: "DALL·E",         category: "Image Generation", company: "OpenAI",          pricing: "Free & Paid", description: "OpenAI's image generation model that turns text descriptions into original images directly inside ChatGPT.", features: ["Text-to-image", "Inpainting edits", "ChatGPT integration", "Multiple styles"], website: "https://openai.com/dall-e-3", image: "assets/logos/dalle.svg" },
  { id: 12, slug: "adobe-firefly", name: "Adobe Firefly",  category: "Image Generation", company: "Adobe",           pricing: "Free & Paid", description: "Adobe's generative AI model built for creatives, integrated across Photoshop, Illustrator, and Express.", features: ["Generative fill", "Text effects", "Vector recolor", "Creative Cloud integration"], website: "https://firefly.adobe.com", image: "assets/logos/adobe-firefly-ai-icon.svg" },

  { id: 13, slug: "runway",        name: "Runway",         category: "Video",            company: "Runway",          pricing: "Free & Paid", description: "A generative video platform that creates and edits video clips from text prompts, images, or existing footage.", features: ["Text-to-video", "Green screen AI", "Motion brush", "Video editing tools"], website: "https://runwayml.com", image: "assets/logos/runway-ai-icon.svg" },
  { id: 14, slug: "pika",          name: "Pika",           category: "Video",            company: "Pika Labs",       pricing: "Free & Paid", description: "An AI video generation tool that turns text or images into short animated video clips in a few clicks.", features: ["Text-to-video", "Image-to-video", "Style effects", "Camera controls"], website: "https://pika.art", image: "assets/logos/pika-art-ai-icon.svg" },
  { id: 15, slug: "synthesia",     name: "Synthesia",      category: "Video",            company: "Synthesia",       pricing: "Paid",        description: "An AI video platform that generates presenter-style videos using digital avatars from a simple text script.", features: ["AI avatars", "Text-to-video", "120+ languages", "Custom avatars"], website: "https://www.synthesia.io", image: "https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/65eae689ace95f5017dc17a0_Logo-main.svg" },

  { id: 16, slug: "jasper",        name: "Jasper",         category: "Writing",          company: "Jasper AI",       pricing: "Paid",        description: "An AI writing assistant built for marketing teams to generate blog posts, ads, and brand-consistent copy at scale.", features: ["Brand voice", "Marketing templates", "SEO mode", "Team collaboration"], website: "https://www.jasper.ai", image: "assets/logos/jasper.png" },
  { id: 17, slug: "copyai",        name: "Copy.ai",        category: "Writing",          company: "Copy.ai",         pricing: "Free & Paid", description: "An AI copywriting tool that generates marketing copy, emails, and social captions from short prompts.", features: ["Templates library", "Workflow automation", "Brand voice", "Chat mode"], website: "https://www.copy.ai", image: "https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/6797ee68ae7908e605a9a4d0_copy_logo-all-dark.svg" },
  { id: 18, slug: "writesonic",    name: "Writesonic",     category: "Writing",          company: "Writesonic",      pricing: "Free & Paid", description: "An AI content generator for articles, ads, and product descriptions with built-in SEO optimization.", features: ["Article writer", "SEO optimization", "Bulk generation", "Chatsonic chat"], website: "https://writesonic.com", image: "assets/logos/writesonic.png" },

  { id: 19, slug: "notion-ai",     name: "Notion AI",      category: "Productivity",     company: "Notion",          pricing: "Paid",        description: "An AI assistant built into Notion that drafts, edits, summarizes, and organizes notes and docs in your workspace.", features: ["In-doc writing help", "Summarization", "Q&A over workspace", "Translation"], website: "https://www.notion.so/product/ai", image: "assets/logos/notion.png" },
  { id: 20, slug: "grammarly",     name: "Grammarly",      category: "Productivity",     company: "Grammarly",       pricing: "Free & Paid", description: "An AI writing assistant that checks grammar, tone, and clarity in real time across browsers and apps.", features: ["Grammar & spelling check", "Tone detection", "Rewrite suggestions", "Plagiarism check"], website: "https://www.grammarly.com", image: "assets/logos/grammarly-icon.svg" },
  { id: 21, slug: "otter-ai",      name: "Otter.ai",       category: "Productivity",     company: "Otter.ai",        pricing: "Free & Paid", description: "An AI meeting assistant that transcribes conversations live and generates searchable notes and summaries.", features: ["Live transcription", "Meeting summaries", "Speaker identification", "Calendar sync"], website: "https://otter.ai", image: "assets/logos/otter.png" },

  { id: 22, slug: "gamma",         name: "Gamma",          category: "Presentation",     company: "Gamma",           pricing: "Free & Paid", description: "An AI tool that turns a topic or outline into a fully designed presentation, document, or webpage in minutes.", features: ["Text-to-deck", "Auto layout", "Theme designer", "One-click sharing"], website: "https://gamma.app", image: "assets/logos/gamma.png" },
  { id: 23, slug: "canva-ai",      name: "Canva AI",       category: "Design",           company: "Canva",           pricing: "Free & Paid", description: "Canva's suite of AI design tools including Magic Design and background remover for quick, polished graphics.", features: ["Magic Design", "Background remover", "Text-to-image", "Brand kit"], website: "https://www.canva.com/ai-image-generator", image: "assets/logos/canva-icon.svg" },

  { id: 24, slug: "suno",          name: "Suno",           category: "Music",            company: "Suno",            pricing: "Free & Paid", description: "An AI music generator that creates full songs, complete with vocals and instrumentation, from a text prompt.", features: ["Text-to-song", "Custom lyrics", "Multiple genres", "Extend & remix"], website: "https://suno.com", image: "assets/logos/suno.png" },
  { id: 25, slug: "udio",          name: "Udio",           category: "Music",            company: "Udio",            pricing: "Free & Paid", description: "An AI music creation platform that generates high-quality, radio-ready songs from text descriptions.", features: ["Text-to-song", "High fidelity audio", "Style remixing", "Public song feed"], website: "https://www.udio.com", image: "assets/logos/udio.png" },

  { id: 26, slug: "elevenlabs",    name: "ElevenLabs",     category: "Text to Speech",   company: "ElevenLabs",      pricing: "Free & Paid", description: "A realistic AI voice generator and cloning tool used for narration, dubbing, and conversational voice agents.", features: ["Voice cloning", "Realistic TTS", "Multilingual dubbing", "Voice agents"], website: "https://elevenlabs.io", image: "assets/logos/elevenlabs-ai-icon.svg" },
  { id: 27, slug: "murf-ai",       name: "Murf AI",        category: "Text to Speech",   company: "Murf",            pricing: "Free & Paid", description: "An AI voiceover platform offering studio-quality synthetic voices for videos, presentations, and e-learning.", features: ["120+ voices", "Voice changer", "Video sync", "Pronunciation editor"], website: "https://murf.ai", image: "assets/logos/murf.png" },

  { id: 28, slug: "whisper",       name: "Whisper",        category: "Speech to Text",   company: "OpenAI",          pricing: "Free",        description: "An open-source AI model from OpenAI that transcribes and translates speech into text with high accuracy.", features: ["Multilingual transcription", "Speech translation", "Open source", "Robust to noise"], website: "https://openai.com/research/whisper", image: "assets/logos/chatgpt-icon.svg" },
  { id: 29, slug: "speechmatics",  name: "Speechmatics",   category: "Speech to Text",   company: "Speechmatics",    pricing: "Paid",        description: "An enterprise-grade speech recognition engine offering accurate transcription across accents and languages.", features: ["Real-time transcription", "50+ languages", "Speaker diarization", "On-prem option"], website: "https://www.speechmatics.com", image: "https://www.speechmatics.com/_next/static/media/SM-Logo-main.b945b6cd.svg" },

  { id: 30, slug: "descript",      name: "Descript",       category: "Video",            company: "Descript",        pricing: "Free & Paid", description: "An all-in-one audio and video editor that lets you edit recordings by editing their text transcript.", features: ["Edit by transcript", "AI voice clone", "Filler word removal", "Screen recording"], website: "https://www.descript.com", image: "https://static-cdn.descript.com/descript-website/images/descript-nav-logo-light.svg" }
=======
  {
    id: 1, slug: "chatgpt", name: "ChatGPT",
    category: "Chatbot",
    company: "OpenAI",
    pricing: "Free & Paid",
    description: "A conversational AI assistant that can answer questions, write content, explain code, and help with everyday tasks through natural chat.",
    features: ["Natural language chat", "Code help & debugging", "Custom GPTs", "Voice mode", "Web browsing"],
    website: "https://chat.openai.com", image: "assets/logos/chatgpt-icon.svg"
  },

  {
    id: 2, slug: "claude",
    name: "Claude",
    category: "Chatbot",
    company: "Anthropic",
    pricing: "Free & Paid",
    description: "An AI assistant focused on helpful, honest, and safe conversation, strong reasoning, and long-context document understanding.",
    features: ["Large context window", "Artifacts & documents", "Strong reasoning", "Vision support", "Projects"],
    website: "https://claude.ai",
    image: "assets/logos/claude-ai-icon.svg"
  },
  { id: 3, slug: "gemini", name: "Gemini", category: "Chatbot", company: "Google", pricing: "Free & Paid", description: "Google's multimodal AI model that understands text, images, and code, and integrates directly with Google Workspace apps.", features: ["Multimodal input", "Workspace integration", "Live conversation mode", "Image understanding"], website: "https://gemini.google.com", image: "assets/logos/google-gemini-icon.svg" },
  { id: 4, slug: "deepseek", name: "DeepSeek", category: "Chatbot", company: "DeepSeek AI", pricing: "Free & Paid", description: "An open and efficient large language model known for strong reasoning performance at a lower computational cost.", features: ["Open-weight models", "Strong reasoning", "Code generation", "Low cost API"], website: "https://www.deepseek.com", image: "assets/logos/deepseek-logo-icon.svg" },
  { id: 5, slug: "perplexity-ai", name: "Perplexity AI", category: "Research", company: "Perplexity", pricing: "Free & Paid", description: "An AI-powered answer engine that searches the web in real time and returns cited, source-backed answers to questions.", features: ["Real-time web search", "Cited sources", "Follow-up questions", "Focus modes"], website: "https://www.perplexity.ai", image: "assets/logos/perplexity-ai-icon.svg" },
  { id: 6, slug: "elicit", name: "Elicit", category: "Research", company: "Elicit", pricing: "Free & Paid", description: "A research assistant that helps find, summarize, and extract data from academic papers to speed up literature reviews.", features: ["Paper search", "Auto summaries", "Data extraction tables", "Citation tracking"], website: "https://elicit.com", image: "https://cdn.brandfetch.io/id-hXB9tqs/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1781728463300" },

  { id: 7, slug: "github-copilot", name: "GitHub Copilot", category: "Coding", company: "GitHub / OpenAI", pricing: "Free & Paid", description: "An AI pair programmer that suggests code, whole functions, and tests directly inside your editor as you type.", features: ["Inline code suggestions", "Chat in IDE", "Multi-language support", "Test generation"], website: "https://github.com/features/copilot", image: "assets/logos/github-copilot-icon.svg" },
  { id: 8, slug: "cursor", name: "Cursor", category: "Coding", company: "Anysphere", pricing: "Free & Paid", description: "An AI-first code editor built on VS Code that can write, edit, and refactor entire codebases through natural language.", features: ["Codebase-aware chat", "Multi-file edits", "AI autocomplete", "Terminal AI"], website: "https://www.cursor.com", image: "assets/logos/cursor-ai-code-icon.svg" },
  { id: 9, slug: "windsurf", name: "Windsurf", category: "Coding", company: "Codeium", pricing: "Free & Paid", description: "An agentic coding IDE that plans and executes multi-step coding tasks across a project with minimal manual guidance.", features: ["Agentic workflows", "Multi-file awareness", "Fast autocomplete", "Built-in chat"], website: "https://codeium.com/windsurf", image: "assets/logos/windsurf-icon.svg" },

  { id: 10, slug: "midjourney", name: "Midjourney", category: "Image Generation", company: "Midjourney Inc.", pricing: "Paid", description: "An AI image generator known for producing highly artistic, stylized visuals from simple text prompts.", features: ["Text-to-image", "Style tuning", "Upscaling", "Community gallery"], website: "https://www.midjourney.com", image: "assets/logos/midjourney-color-icon.svg" },
  { id: 11, slug: "dalle", name: "DALL·E", category: "Image Generation", company: "OpenAI", pricing: "Free & Paid", description: "OpenAI's image generation model that turns text descriptions into original images directly inside ChatGPT.", features: ["Text-to-image", "Inpainting edits", "ChatGPT integration", "Multiple styles"], website: "https://openai.com/dall-e-3", image: "assets/logos/dalle.svg" },
  { id: 12, slug: "adobe-firefly", name: "Adobe Firefly", category: "Image Generation", company: "Adobe", pricing: "Free & Paid", description: "Adobe's generative AI model built for creatives, integrated across Photoshop, Illustrator, and Express.", features: ["Generative fill", "Text effects", "Vector recolor", "Creative Cloud integration"], website: "https://firefly.adobe.com", image: "assets/logos/adobe-firefly-ai-icon.svg" },

  { id: 13, slug: "runway", name: "Runway", category: "Video", company: "Runway", pricing: "Free & Paid", description: "A generative video platform that creates and edits video clips from text prompts, images, or existing footage.", features: ["Text-to-video", "Green screen AI", "Motion brush", "Video editing tools"], website: "https://runwayml.com", image: "assets/logos/runway-ai-icon.svg" },
  { id: 14, slug: "pika", name: "Pika", category: "Video", company: "Pika Labs", pricing: "Free & Paid", description: "An AI video generation tool that turns text or images into short animated video clips in a few clicks.", features: ["Text-to-video", "Image-to-video", "Style effects", "Camera controls"], website: "https://pika.art", image: "assets/logos/pika-art-ai-icon.svg" },
  { id: 15, slug: "synthesia", name: "Synthesia", category: "Video", company: "Synthesia", pricing: "Paid", description: "An AI video platform that generates presenter-style videos using digital avatars from a simple text script.", features: ["AI avatars", "Text-to-video", "120+ languages", "Custom avatars"], website: "https://www.synthesia.io", image: "https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/65eae689ace95f5017dc17a0_Logo-main.svg" },

  { id: 16, slug: "jasper", name: "Jasper", category: "Writing", company: "Jasper AI", pricing: "Paid", description: "An AI writing assistant built for marketing teams to generate blog posts, ads, and brand-consistent copy at scale.", features: ["Brand voice", "Marketing templates", "SEO mode", "Team collaboration"], website: "https://www.jasper.ai", image: "assets/logos/jasper.png" },
  { id: 17, slug: "copyai", name: "Copy.ai", category: "Writing", company: "Copy.ai", pricing: "Free & Paid", description: "An AI copywriting tool that generates marketing copy, emails, and social captions from short prompts.", features: ["Templates library", "Workflow automation", "Brand voice", "Chat mode"], website: "https://www.copy.ai", image: "https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/6797ee68ae7908e605a9a4d0_copy_logo-all-dark.svg" },
  { id: 18, slug: "writesonic", name: "Writesonic", category: "Writing", company: "Writesonic", pricing: "Free & Paid", description: "An AI content generator for articles, ads, and product descriptions with built-in SEO optimization.", features: ["Article writer", "SEO optimization", "Bulk generation", "Chatsonic chat"], website: "https://writesonic.com", image: "assets/logos/writesonic.png" },

  { id: 19, slug: "notion-ai", name: "Notion AI", category: "Productivity", company: "Notion", pricing: "Paid", description: "An AI assistant built into Notion that drafts, edits, summarizes, and organizes notes and docs in your workspace.", features: ["In-doc writing help", "Summarization", "Q&A over workspace", "Translation"], website: "https://www.notion.so/product/ai", image: "assets/logos/notion.png" },
  { id: 20, slug: "grammarly", name: "Grammarly", category: "Productivity", company: "Grammarly", pricing: "Free & Paid", description: "An AI writing assistant that checks grammar, tone, and clarity in real time across browsers and apps.", features: ["Grammar & spelling check", "Tone detection", "Rewrite suggestions", "Plagiarism check"], website: "https://www.grammarly.com", image: "assets/logos/grammarly-icon.svg" },
  { id: 21, slug: "otter-ai", name: "Otter.ai", category: "Productivity", company: "Otter.ai", pricing: "Free & Paid", description: "An AI meeting assistant that transcribes conversations live and generates searchable notes and summaries.", features: ["Live transcription", "Meeting summaries", "Speaker identification", "Calendar sync"], website: "https://otter.ai", image: "assets/logos/otter.png" },

  { id: 22, slug: "gamma", name: "Gamma", category: "Presentation", company: "Gamma", pricing: "Free & Paid", description: "An AI tool that turns a topic or outline into a fully designed presentation, document, or webpage in minutes.", features: ["Text-to-deck", "Auto layout", "Theme designer", "One-click sharing"], website: "https://gamma.app", image: "assets/logos/gamma.png" },
  { id: 23, slug: "canva-ai", name: "Canva AI", category: "Design", company: "Canva", pricing: "Free & Paid", description: "Canva's suite of AI design tools including Magic Design and background remover for quick, polished graphics.", features: ["Magic Design", "Background remover", "Text-to-image", "Brand kit"], website: "https://www.canva.com/ai-image-generator", image: "assets/logos/canva-icon.svg" },

  { id: 24, slug: "suno", name: "Suno", category: "Music", company: "Suno", pricing: "Free & Paid", description: "An AI music generator that creates full songs, complete with vocals and instrumentation, from a text prompt.", features: ["Text-to-song", "Custom lyrics", "Multiple genres", "Extend & remix"], website: "https://suno.com", image: "assets/logos/suno.png" },
  { id: 25, slug: "udio", name: "Udio", category: "Music", company: "Udio", pricing: "Free & Paid", description: "An AI music creation platform that generates high-quality, radio-ready songs from text descriptions.", features: ["Text-to-song", "High fidelity audio", "Style remixing", "Public song feed"], website: "https://www.udio.com", image: "assets/logos/udio.png" },

  { id: 26, slug: "elevenlabs", name: "ElevenLabs", category: "Text to Speech", company: "ElevenLabs", pricing: "Free & Paid", description: "A realistic AI voice generator and cloning tool used for narration, dubbing, and conversational voice agents.", features: ["Voice cloning", "Realistic TTS", "Multilingual dubbing", "Voice agents"], website: "https://elevenlabs.io", image: "assets/logos/elevenlabs-ai-icon.svg" },
  { id: 27, slug: "murf-ai", name: "Murf AI", category: "Text to Speech", company: "Murf", pricing: "Free & Paid", description: "An AI voiceover platform offering studio-quality synthetic voices for videos, presentations, and e-learning.", features: ["120+ voices", "Voice changer", "Video sync", "Pronunciation editor"], website: "https://murf.ai", image: "assets/logos/murf.png" },

  { id: 28, slug: "whisper", name: "Whisper", category: "Speech to Text", company: "OpenAI", pricing: "Free", description: "An open-source AI model from OpenAI that transcribes and translates speech into text with high accuracy.", features: ["Multilingual transcription", "Speech translation", "Open source", "Robust to noise"], website: "https://openai.com/research/whisper", image: "assets/logos/chatgpt-icon.svg" },
  { id: 29, slug: "speechmatics", name: "Speechmatics", category: "Speech to Text", company: "Speechmatics", pricing: "Paid", description: "An enterprise-grade speech recognition engine offering accurate transcription across accents and languages.", features: ["Real-time transcription", "50+ languages", "Speaker diarization", "On-prem option"], website: "https://www.speechmatics.com", image: "https://www.speechmatics.com/_next/static/media/SM-Logo-main.b945b6cd.svg" },

  { id: 30, slug: "descript", name: "Descript", category: "Video", company: "Descript", pricing: "Free & Paid", description: "An all-in-one audio and video editor that lets you edit recordings by editing their text transcript.", features: ["Edit by transcript", "AI voice clone", "Filler word removal", "Screen recording"], website: "https://www.descript.com", image: "https://static-cdn.descript.com/descript-website/images/descript-nav-logo-light.svg" }
>>>>>>> 046897e (Updated FindMyAi project files)
];

const categories = [
  "Chatbot",
  "Coding",
  "Image Generation",
  "Video",
  "Writing",
  "Productivity",
  "Presentation",
  "Design",
  "Music",
  "Text to Speech",
  "Speech to Text",
  "Research"
];