import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { MarkdownWithBibleVerses } from '@/components/MarkdownWithBibleVerses';
import * as denominations from '@/lib/denominations';

const APIDocumentation = () => {
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
            API Documentation:<br />Parrot-QA Endpoint
          </h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            This endpoint provides a structured question-and-answer service based on Christian theological perspectives.
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
              https://calvinistparrot.com/api/parrot-qa
            </pre>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Overview</h2>
            </div>
            <p className="text-[#333333] mb-4">
              The endpoint processes user questions through categorization, reasoning, and review phases. It synthesizes responses to doctrinal queries while supporting multiple denominational modes. Essential doctrines are upheld, including:
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
            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">Request Body</h3>
            <p className="text-[#333333] mb-4">
              The API expects a JSON object with these fields:
            </p>
            <ul className="list-disc pl-8 text-[#333333] space-y-2 mb-4">
              <li><strong>question</strong> (string, required): The question to ask.</li>
              <li><strong>userId</strong> (string, optional): User ID for tracking question history.</li>
              <li>
                <strong>mode</strong> (string, optional): Specifies the theological perspective. Possible values:
                <ul className="list-disc pl-6">
                  <li>reformed-baptist (default)</li>
                  <li>presbyterian</li>
                  <li>wesleyan</li>
                  <li>lutheran</li>
                  <li>anglican</li>
                  <li>pentecostal</li>
                  <li>non-denom</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">Response Format</h3>
            <p className="text-[#333333] mb-4">
              The API streams a multi-stage JSON response:
            </p>
            <ol className="list-decimal pl-8 text-[#333333] space-y-2">
              <li>
                <strong>Progress Updates:</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{\"type\":\"progress\",\"message\":\"[Status message]\"}"}
                </pre>
              </li>
              <li>
                <strong>Categorization:</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{\"type\":\"categorization\",\"data\":{\"category\":\"[Category]\",\"subcategory\":\"[Subcategory]\",\"issue_type\":\"[Type]\"}}"}
                </pre>
              </li>
              <li>
                <strong>Agent Responses:</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{\"type\":\"agent_responses\",\"data\":{\"first_answer\":\"[Agent 1's answer]\",\"second_answer\":\"[Agent 2's answer]\",\"third_answer\":\"[Agent 3's answer]\"}}"}
                </pre>
              </li>
              <li>
                <strong>Calvin Review:</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{\"type\":\"calvin_review\",\"content\":\"[Calvin's synthesized review]\"}"}
                </pre>
              </li>
              <li>
                <strong>Reviewed Answer (Streamed):</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {"{\"type\":\"reviewed_answer\",\"content\":\"[Final synthesized answer]\"}"}
                </pre>
              </li>
            </ol>
          </div>

          {/* Reviewer Agent */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Reviewer Agent</h2>
            </div>
            <p className="text-[#333333] mb-4">
              The API currently employs one reviewer agent, <strong>Calvin</strong>, who reviews the three agent responses using insights from John Calvin’s "Institutes of the Christian Religion." Additional agents may be added on request.
            </p>
          </div>

          {/* Example Usage */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Example Usage</h2>
            </div>
            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">Request</h3>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto mb-4">
              {"POST https://calvinistparrot.com/api/parrot-qa\nContent-Type: application/json\n\n{\n  \"question\": \"Who is God?\",\n  \"mode\": \"reformed-baptist\"\n}"}
            </pre>
            <h3 className="text-xl font-semibold text-[#004D4D] mb-2">Response</h3>
            <pre className="bg-gray-100 p-4 rounded text-[#333333] overflow-x-auto">
              {"{\"type\":\"progress\",\"message\":\"Understanding question...\"}\n{\"type\":\"categorization\",\"data\":{\"reformatted_question\":\"No reformatting needed\",\"category\":\"Theology\",\"subcategory\":\"Doctrine of God (Theology Proper)\",\"issue_type\":\"Primary\"}}\n{\"type\":\"progress\",\"message\":\"Asking the Counsel of Three...\"}\n{\"type\":\"agent_responses\",\"data\":{\"first_answer\":\"God is the creator...\",\"second_answer\":\"God is the Creator...\",\"third_answer\":\"God is the Creator...\"}}\n{\"type\":\"progress\",\"message\":\"Calvin is reviewing the answers...\"}\n{\"type\":\"calvin_review\",\"content\":\"All three answers provide a good understanding of who God is...\"}\n{\"type\":\"progress\",\"message\":\"Synthesizing final answer...\"}\n{\"type\":\"reviewed_answer\",\"content\":\"God...\"}"}
            </pre>
          </div>

          {/* Modes */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Modes</h2>
            </div>
            <p className="text-[#333333] mb-4">
              The API supports the following theological modes:
            </p>
            <ol className="list-decimal pl-8 text-[#333333] space-y-2">
              <li>Reformed Baptist (default)</li>
              <li>Presbyterian</li>
              <li>Wesleyan</li>
              <li>Lutheran</li>
              <li>Anglican</li>
              <li>Pentecostal/Charismatic</li>
              <li>Non-Denominational Evangelical</li>
            </ol>
          </div>

          {/* Denominations Selector */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
              <h2 className="text-2xl font-bold text-[#004D4D]">Denominational Details</h2>
            </div>
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

          {/* Try the QA Function */}
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

export default APIDocumentation;
