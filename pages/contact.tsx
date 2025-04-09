import React, { useState } from 'react';
import { Mail, Phone, FileText, Github, Twitter, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <section className="py-16 md:py-24 bg-[#F5EEDC]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#004D4D]">Contact Us</h1>
                    <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
                    <p className="text-lg text-[#333333] max-w-3xl mx-auto">
                        We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    {/* Contact Information */}
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#004D4D]">Get in Touch</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-[#333333] mb-6 max-w-3xl">
                                Have questions about our ministry, need theological resources, or want to discuss a potential collaboration? We're here to help.
                            </p>

                            <div className="space-y-4 flex flex-col items-center text-center">
                                <div className="flex items-center">
                                    <Mail className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0" />
                                    <a href="mailto:jesusmancilla@calvinistparrotministries.org" className="text-[#004D4D] hover:underline">
                                        jesusmancilla@calvinistparrotministries.org
                                    </a>
                                </div>

                                <div className="flex flex-col items-center gap-4">
                                    <div className="flex items-center">
                                        <MessageSquare className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0" />
                                        <p className="text-[#333333]">
                                            For faster theological answers, try our:
                                        </p>
                                    </div>
                                    <div className="mt-2 flex space-x-2">
                                        <Link
                                            href="https://www.calvinistparrot.com/"
                                            className="inline-block px-3 py-1 bg-[#004D4D] text-white text-sm rounded hover:bg-[#003A3A] transition-colors"
                                        >
                                            Parrot-Chat
                                        </Link>
                                        <Link
                                            href="https://www.calvinistparrot.com/parrot-qa"
                                            className="inline-block px-3 py-1 bg-[#004D4D] text-white text-sm rounded hover:bg-[#003A3A] transition-colors"
                                        >
                                            Parrot-QA
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-[#004D4D] mb-3">Open Source Contribution</h3>
                                <p className="text-[#333333]">
                                    This project is open source! If you'd like to contribute, please check out our GitHub repository
                                    and read our contribution guidelines.
                                </p>
                                <div className="flex items-center">
                                    <Github className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0" />
                                    <a
                                        href="https://github.com/Jegama/calvinist-parrot"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#004D4D] hover:underline"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scripture Reference */}
                    <div className="mt-8 text-center">
                        <div className="mb-4">
                            <p className="text-xl font-bold text-[#004D4D]">Soli Deo Gloria</p>
                            <p className="text-sm text-[#666666] italic">- Romans 11:36</p>
                        </div>
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

export default ContactPage;
