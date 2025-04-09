import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { MarkdownWithBibleVerses } from '@/components/MarkdownWithBibleVerses';
import * as denominations from '@/lib/denominations';

const ParrotChatDocumentation = () => {
  const [selectedMode, setSelectedMode] = useState("reformed-baptist");

  const getModeContent = (mode: string) => {
    switch (mode) {
      case "reformed-baptist":
        return denominations.reformed_baptist;
      case "presbyterian":
        return denominations.presbyterian;
      case "wesleyan":
        return denominations.wesleyan;
      case "lutheran":
        return denominations.lutheran;
      case "anglican":
        return denominations.anglican;
      case "pentecostal":
        return denominations.pentecostal;
      case "non-denom":
        return denominations.non_denom;
      default:
        return denominations.reformed_baptist;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5EEDC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#004D4D]">
            API Documentation:<br />Parrot-Chat Endpoint
          </h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            This endpoint provides real-time conversational interactions through streaming responses, supporting multiple denominational perspectives.
          </p>
        </div>

        {/* Documentation Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          {/* Endpoint URL */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Endpoint URL</h2>
            </div>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto">
              https://calvinistparrot.com/api/parrot-chat
            </pre>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Overview</h2>
            </div>
            <p className="text-[#333333] mb-4">
              The Parrot Chat endpoint provides real-time conversational interactions by streaming responses. It handles creating chat sessions, processing user messages, maintaining context, and integrating multiple theological agents including a final review stage ("Calvin's Review"). Essential doctrines are upheld, including:
            </p>
            <ul className="list-disc pl-8 text-[#333333] space-y-2">
              <li><strong>The Trinity:</strong> We believe in one God, eternally existing in three persons—Father, Son, and Holy Spirit.</li>
              <li><strong>The Character of God:</strong> God is holy, supreme, sovereign, immutable, faithful, good, patient, gracious, merciful, loving, and just; His wrath against sin is real.</li>
              <li><strong>The Authority of Scripture:</strong> The Bible is the inspired, inerrant, and infallible Word of God, serving as the ultimate authority in all matters of faith and practice.</li>
              <li><strong>The Deity and Humanity of Christ:</strong> We affirm that Jesus Christ is truly God and truly man (<em>Vera Deus, vera homo</em>).</li>
              <li><strong>The Incarnation and Virgin Birth:</strong> We affirm that Jesus Christ took on human nature through miraculous conception by the Holy Spirit and was born of the Virgin Mary.</li>
              <li><strong>The Atonement (Christ's Saving Work):</strong> Christ's sacrificial death on the cross is necessary and sufficient to reconcile sinners to God.</li>
              <li><strong>The Gospel:</strong> We proclaim that salvation is secured by Christ's historical death, burial, and resurrection on the third day, demonstrating His victory over sin and death.</li>
              <li><strong>Justification by Faith:</strong> Individuals are justified solely by grace alone through faith alone in Christ alone, apart from works.</li>
              <li><strong>The Resurrection:</strong> We affirm the bodily resurrection of Jesus Christ, confirming His divinity and victory over sin and death.</li>
              <li><strong>Christ's Return and Final Judgment:</strong> Jesus Christ will return personally and bodily to judge the living and the dead, culminating in the renewal of all things.</li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">How It Works</h2>
            </div>
            <ol className="list-decimal pl-8 text-[#333333] space-y-4">
              <li>
                <h3 className="text-xl font-semibold text-[#004D4D]">Chat Session Initialization</h3>
                <p>There are two ways to start a new chat:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>From Parrot QA:</strong> Initialize with both question and answer</li>
                  <li><strong>From Chat Interface:</strong> Initialize with just a question</li>
                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-[#004D4D]">Chat Continuation</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Uses stored chat history to maintain context</li>
                  <li>Processes messages through multiple agents and tools</li>
                  <li>Streams real-time responses with progress updates</li>
                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-[#004D4D]">Denomination Handling</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Each denomination maps to a specific system prompt</li>
                  <li>Affects how the AI interprets and responds to questions</li>
                  <li>Maintains core doctrinal consistency while respecting denominational distinctives</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* API Reference */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">API Reference</h2>
            </div>

            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">Request Structure</h3>
            <p className="text-[#333333] mb-4">
              Send a JSON payload with these possible fields:
            </p>
            <ul className="list-disc pl-8 text-[#333333] space-y-2 mb-4">
              <li><strong>userId</strong> (string): Unique identifier for the user.</li>
              <li><strong>chatId</strong> (string, optional): Identifier for an existing chat session.</li>
              <li><strong>message</strong> (string): The user's chat message.</li>
              <li><strong>initialQuestion</strong> (string, optional): For starting a new chat session.</li>
              <li><strong>initialAnswer</strong> (string, optional): Initial answer for a new chat session.</li>
              <li>
                <strong>denomination</strong> (string, optional): The theological perspective. Possible values:
                <ul className="list-disc pl-6">
                  <li>reformed-baptist (Reformed Baptist perspective - default)</li>
                  <li>presbyterian (Presbyterian perspective)</li>
                  <li>wesleyan (Wesleyan perspective)</li>
                  <li>lutheran (Lutheran perspective)</li>
                  <li>anglican (Anglican perspective)</li>
                  <li>pentecostal (Pentecostal/Charismatic perspective)</li>
                  <li>non-denom (Non-Denominational Evangelical perspective)</li>
                </ul>
              </li>
              <li><strong>isAutoTrigger</strong> (boolean, optional): Indicates if the message is auto-triggered (for conversation continuity).</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">Response Stream Format</h3>
            <p className="text-[#333333] mb-4">
              The API streams different event types as JSON objects:
            </p>
            <ol className="list-decimal pl-8 text-[#333333] space-y-2">
              <li>
                <strong>Progress Updates</strong> - Status messages during processing
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{"}"type": "progress", "title": "Looking for articles", "content": "Searching for: predestination"{"}"}
                </pre>
              </li>
              <li>
                <strong>Parrot Messages</strong> - Main response content (streamed in chunks)
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{"}"type": "parrot", "content": "The doctrine of predestination..."{"}"}
                </pre>
              </li>
              <li>
                <strong>Calvin's Review</strong> - Theological review feedback
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{"}"type": "calvin", "content": "This explanation aligns with Reformed theology..."{"}"}
                </pre>
              </li>
              <li>
                <strong>Reference Materials</strong> - Related articles and resources
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{"}"type": "gotQuestions", "content": "* [What is predestination?](https://www.gotquestions.org/predestination.html)"{"}"}
                </pre>
              </li>
              <li>
                <strong>Stream Completion</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{"}"type": "done"{"}"}
                </pre>
              </li>
            </ol>
          </div>

          {/* Usage Patterns */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Usage Patterns</h2>
            </div>

            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">1. Initialize from Parrot QA</h3>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto mb-4">
              {"POST /api/parrot-chat\n{\n  \"userId\": \"user123\",\n  \"initialQuestion\": \"What is predestination?\",\n  \"initialAnswer\": \"Predestination refers to...\",\n  \"denomination\": \"reformed-baptist\"\n}"}
            </pre>

            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">2. Initialize from Chat Interface</h3>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto mb-4">
              {"POST /api/parrot-chat\n{\n  \"userId\": \"user123\",\n  \"initialQuestion\": \"What is predestination?\"\n}"}
            </pre>
            <p className="text-[#333333] mb-4">Response:</p>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto mb-4">
              {"{\n  \"chatId\": \"chat123\"\n}"}
            </pre>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-[#333333]">
                <strong>Note:</strong> This endpoint only returns the chatId. The client should navigate to a new URL with this chatId (e.g., <code>/main-chat/chat123</code>). When the chat page loads, it will automatically trigger the streaming process using the <code>isAutoTrigger</code> flag to process the initial question.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[#004D4D] mb-4">Complete Flow Example</h3>
            <ol className="list-decimal pl-8 text-[#333333] space-y-4">
              <li>
                <strong>Start a new chat and get the chatId</strong>:
                <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
                  {"// In main-chat/page.tsx\nconst handleStartNewChat = async () => {\n  const response = await fetch('/api/parrot-chat', {\n   method: 'POST',\n   headers: { 'Content-Type': 'application/json' },\n   body: JSON.stringify({ \n    userId: \"user123\", \n    initialQuestion: \"What is predestination?\" \n   }),\n  });\n  const { chatId } = await response.json();\n  router.push(`/main-chat/${chatId}`);  // Navigate to chat page\n};"}
                </pre>
              </li>
              <li>
                <strong>Chat page loads and auto-triggers the initial question</strong>:
                <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
                  {"// In main-chat/[chatId]/page.tsx\nuseEffect(() => {\n  // When we detect only a user message with no response yet\n  if (messages.length === 1 && messages[0].sender === \"user\" && !autoSentRef.current) {\n   autoSentRef.current = true;\n   // Auto-trigger the API call with the isAutoTrigger flag\n   handleSendMessage({ \n    message: messages[0].content, \n    isAutoTrigger: true \n   });\n  }\n}, [messages, handleSendMessage]);\n\n// Actual API call with isAutoTrigger flag\nconst handleSendMessage = async ({ message, isAutoTrigger }) => {\n  const response = await fetch(\"/api/parrot-chat\", {\n   method: \"POST\",\n   headers: { \"Content-Type\": \"application/json\" },\n   body: JSON.stringify({\n    chatId: \"chat123\",  // From URL params\n    message: \"What is predestination?\",  // Initial question\n    isAutoTrigger: true  // This tells the API not to store the message again\n   }),\n  });\n  \n  // Handle streaming response...\n};"}
                </pre>
              </li>
              <li>
                <strong>API processes the request differently with isAutoTrigger</strong>:
                <ul className="list-disc pl-6 mt-2">
                  <li>When <code>isAutoTrigger: true</code>, the API doesn't save the message again (it's already stored)</li>
                  <li>The API processes the message and streams the response</li>
                  <li>The client receives and displays the streaming response</li>
                </ul>
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-[#004D4D] mt-6 mb-2">3. Continue Conversation</h3>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto mb-4">
              {"POST /api/parrot-chat\n{\n  \"userId\": \"user123\",\n  \"chatId\": \"chat123\",\n  \"message\": \"How does it relate to free will?\"\n}"}
            </pre>

            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">4. Fetch Chat History</h3>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto mb-4">
              {"GET /api/parrot-chat?chatId=chat123"}
            </pre>
            <p className="text-[#333333] mb-4">Response:</p>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto mb-4">
              {"{\n  \"chat\": {\n   \"id\": \"cm7p6rik1001emqp0slgxgu1j\",\n   \"userId\": \"6754db6b00119ba9e0da\",\n   \"conversationName\": \"Understanding Predestination\",\n   \"denomination\": \"reformed-baptist\",\n   \"createdAt\": \"2025-02-28T19:48:22.321Z\",\n   \"modifiedAt\": \"2025-02-28T19:48:45.855Z\"\n  },\n  \"messages\": [\n   {\n    \"id\": \"cm7p6rimi001gmqp0liuisq27\",\n    \"chatId\": \"cm7p6rik1001emqp0slgxgu1j\",\n    \"sender\": \"user\",\n    \"content\": \"What is predestination?\",\n    \"timestamp\": \"2025-02-28T19:48:22.410Z\"\n   },\n   {\n    \"id\": \"cm7p6rqc0001imqp0h9gywt2x\",\n    \"chatId\": \"cm7p6rik1001emqp0slgxgu1j\",\n    \"sender\": \"gotQuestions\",\n    \"content\": \"* [Providence and Predestination - Monergism](https://www.monergism.com/reformation-theology/blog/providence-and-predestination)\\n* [What is predestination? - GotQuestions.org](https://www.gotquestions.org/predestination.html)\\n* [Predestination and the Work of Jesus Considered | Monergism](https://www.monergism.com/predestination-and-work-jesus-considered)\\n* [What is Predestination? - Monergism](https://www.monergism.com/what-predestination)\\n* [What does the Bible say about predestination vs. free will?](https://www.gotquestions.org/predestination-vs-free-will.html)\",\n    \"timestamp\": \"2025-02-28T19:48:32.401Z\"\n   },\n   {\n    \"id\": \"cm7p6rxq0001kmqp0kdxt3qvt\",\n    \"chatId\": \"cm7p6rik1001emqp0slgxgu1j\",\n    \"sender\": \"calvin\",\n    \"content\": \"Your summary of predestination captures...\",\n    \"timestamp\": \"2025-02-28T19:48:41.938Z\"\n   },\n   {\n    \"id\": \"cm7p6rzqs001mmqp0jrawhfi1\",\n    \"chatId\": \"cm7p6rik1001emqp0slgxgu1j\",\n    \"sender\": \"parrot\",\n    \"content\": \"Predestination is...\",\n    \"timestamp\": \"2025-02-28T19:48:44.596Z\"\n   }\n  ]\n}"}
            </pre>
          </div>

          {/* Implementation Guide */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Implementation Guide</h2>
            </div>

            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">Front-end Integration Example</h3>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto mb-4">
              {"const handleStream = async (chatId: string, message: string) => {\n  const response = await fetch('/api/parrot-chat', {\n   method: 'POST',\n   headers: { 'Content-Type': 'application/json' },\n   body: JSON.stringify({ chatId, message })\n  });\n\n  const reader = response.body.getReader();\n  const decoder = new TextDecoder();\n\n  while (true) {\n   const { value, done } = await reader.read();\n   if (done) break;\n   \n   const lines = decoder.decode(value).split('\\n');\n   for (const line of lines) {\n    if (!line.trim()) continue;\n    \n    const event = JSON.parse(line);\n    switch (event.type) {\n      case 'progress':\n       updateProgress(event.title, event.content);\n       break;\n      case 'parrot':\n       appendParrotMessage(event.content);\n       break;\n      case 'calvin':\n       showCalvinReview(event.content);\n       break;\n      case 'gotQuestions':\n       showReferences(event.content);\n       break;\n      case 'done':\n       finishStream();\n       break;\n    }\n   }\n  }\n};"}
            </pre>
            <p className="text-[#333333] mb-4">
              For complete implementation examples, see:
            </p>
            <ul className="list-disc pl-6 text-[#333333] space-y-1">
              <li><a href="https://github.com/Jegama/calvinist-parrot/blob/master/app/main-chat/page.tsx" className="text-[#004D4D] hover:underline">Main Chat Page</a></li>
              <li><a href="https://github.com/Jegama/calvinist-parrot/blob/master/app/main-chat/[chatId]/page.tsx" className="text-[#004D4D] hover:underline">Chat Session Page</a></li>
            </ul>
          </div>

          {/* Denominations Selector */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Denominational Details</h2>
            </div>
            <p className="text-[#333333] mb-4">
              The endpoint supports the following denomination:
            </p>
            <ol className="list-decimal pl-8 text-[#333333] space-y-1 mb-4">
              <li>Reformed Baptist (default)</li>
              <li>Presbyterian</li>
              <li>Wesleyan</li>
              <li>Lutheran</li>
              <li>Anglican</li>
              <li>Pentecostal/Charismatic</li>
              <li>Non-Denominational Evangelical</li>
            </ol>
            <p className="text-[#333333] mb-4">
              Each mode tailors its responses according to distinct theological perspectives on secondary issues while sharing a common foundation on core doctrines.
            </p>
            <div className="mb-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors">
                  Select Mode: {selectedMode}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white p-2 rounded-lg shadow-md border border-[#004D4D]/10">
                  <DropdownMenuItem onClick={() => setSelectedMode("reformed-baptist")} className="px-4 py-2 hover:bg-[#F5EEDC] rounded cursor-pointer">
                    Reformed Baptist
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedMode("presbyterian")} className="px-4 py-2 hover:bg-[#F5EEDC] rounded cursor-pointer">
                    Presbyterian
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedMode("wesleyan")} className="px-4 py-2 hover:bg-[#F5EEDC] rounded cursor-pointer">
                    Wesleyan
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedMode("lutheran")} className="px-4 py-2 hover:bg-[#F5EEDC] rounded cursor-pointer">
                    Lutheran
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedMode("anglican")} className="px-4 py-2 hover:bg-[#F5EEDC] rounded cursor-pointer">
                    Anglican
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedMode("pentecostal")} className="px-4 py-2 hover:bg-[#F5EEDC] rounded cursor-pointer">
                    Pentecostal/Charismatic
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedMode("non-denom")} className="px-4 py-2 hover:bg-[#F5EEDC] rounded cursor-pointer">
                    Non-Denominational Evangelical
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <MarkdownWithBibleVerses content={getModeContent(selectedMode)} />
          </div>

          {/* Contact and Open Source Info */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Contact</h2>
            </div>
            <p className="text-[#333333] mb-4">
              For further questions or support, <a href="mailto:jesusmancilla@calvinistparrotministries.org" className="text-[#004D4D] hover:underline">please reach out</a>!
            </p>
            <p className="text-[#333333] mb-4">
              This is open source, so if you're interested in helping me development this, check out the <a href="https://github.com/Jegama/calvinist-parrot" className="text-[#004D4D] hover:underline">GitHub repo</a>.
            </p>

            <div className="mt-8 text-center">
              <div className="mb-4">
                <p className="text-xl font-bold text-[#004D4D]">Freely you have received; freely give.</p>
                <p className="text-sm text-[#666666] italic">- Matthew 10:8</p>
              </div>

              <div className="mb-4">
                <p className="text-xl font-bold text-[#004D4D]">Soli Deo Gloria</p>
                <p className="text-sm text-[#666666] italic">- Romans 11:36</p>
              </div>
            </div>
          </div>

          {/* Try the Chat Function */}
          <div className="text-center mt-8">
            <Link
              href="https://www.calvinistparrot.com/"
              className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors"
            >
              Try it!
            </Link>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParrotChatDocumentation;
