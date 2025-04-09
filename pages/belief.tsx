import React from 'react';
import { Check, BookOpen, CircleDashed, FileText } from 'lucide-react';
import Link from 'next/link';

const DoctrinalStatement = () => {
  const essentialDoctrines = [
    "The Trinity: We believe in one God, eternally existing in three persons—Father, Son, and Holy Spirit.",
    "The Character of God: God is holy, supreme, sovereign, immutable, faithful, good, patient, gracious, merciful, loving, and just; His wrath against sin is real.",
    "The Authority of Scripture: The Bible is the inspired, inerrant, and infallible Word of God, serving as the ultimate authority in all matters of faith and practice.",
    "The Deity and Humanity of Christ: We affirm that Jesus Christ is truly God and truly man (Vera Deus, vera homo).",
    "The Incarnation and Virgin Birth: We affirm that Jesus Christ took on human nature through miraculous conception by the Holy Spirit and was born of the Virgin Mary.",
    "The Atonement (Christ's Saving Work): Christ's sacrificial death on the cross is necessary and sufficient to reconcile sinners to God.",
    "The Gospel: We proclaim that salvation is secured by Christ's historical death, burial, and resurrection on the third day, demonstrating His victory over sin and death.",
    "Justification by Faith: Individuals are justified solely by grace alone through faith alone in Christ alone, apart from works.",
    "The Resurrection: We affirm the bodily resurrection of Jesus Christ, confirming His divinity and victory over sin and death.",
    "Christ's Return and Final Judgment: Jesus Christ will return personally and bodily to judge the living and the dead, culminating in the renewal of all things."
  ];

  const secondaryDoctrines = [
    "Baptism: Mode and subjects of baptism (e.g., believer's baptism vs. infant baptism).",
    "Church Governance: Forms of church polity (congregational, presbyterian, episcopal).",
    "The Lord's Supper: Perspectives on Christ's presence in communion (symbolic, spiritual, real presence).",
    "Spiritual Gifts: Continuation or cessation of spiritual gifts.",
    "Role of Women in the Church: Complementarian or egalitarian views on women in leadership and ministry.",
    "Sanctification: Perspectives on the process and extent of sanctification.",
    "Continuity and Discontinuity: Relationship between Old and New Testaments (covenant theology, dispensationalism).",
    "Security of Salvation: Views on perseverance of the saints or loss of salvation.",
    "The Atonement (How it Works): Theories on Christ's atoning work (penal substitution, Christus Victor, moral influence)."
  ];

  const tertiaryDoctrines = [
    "Eschatology: Premillennialism, amillennialism, postmillennialism.",
    "Worship Style: Traditional versus contemporary worship preferences.",
    "Counseling Approaches: Biblical (nouthetic) counseling, biblical counseling, integrationist counseling.",
    "Creation: Interpretations of Genesis (young-earth, old-earth, theistic evolution).",
    "Christian Liberty: Personal convictions on disputable matters (diet, special days).",
    "Church Discipline: Approaches to practice and extent (formal, informal, excommunication).",
    "Parachurch Organizations: Role and function of external Christian ministries.",
    "Non-essential Doctrines: Varied interpretations of non-essential biblical passages."
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-[#F5EEDC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#004D4D]">Doctrinal Statement</h1>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-lg text-[#333333] max-w-3xl mx-auto">
              Our theological foundation that guides all aspects of our ministry and partnerships.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#004D4D]">Core Doctrines</h2>
              </div>
              <p className="mb-6 text-[#333333]">
                These core doctrines represent the foundational truths upon which Calvinist Parrot Ministries stands. We will not compromise on these essential beliefs:
              </p>
              <ul className="space-y-4">
                {essentialDoctrines.map((doctrine, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-[#333333]">{doctrine}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#004D4D]">Secondary Doctrines</h2>
              </div>
              <p className="mb-6 text-[#333333]">
                Secondary doctrines are important but do not define Christian identity. Differences here may lead to denominational distinctions. Calvinist Parrot Ministries will respect and accommodate these differences in customized resources:
              </p>
              <ul className="space-y-4">
                {secondaryDoctrines.map((doctrine, index) => (
                  <li key={index} className="flex items-start">
                    <BookOpen className="h-6 w-6 text-[#004D70] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-[#333333]">{doctrine}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#004D4D]">Tertiary Doctrines</h2>
              </div>
              <p className="mb-6 text-[#333333]">
                Tertiary doctrines are less central and do not significantly impact unity or fellowship. Calvinist Parrot Ministries will maintain a neutral stance and encourage respectful discussion:
              </p>
              <ul className="space-y-4">
                {tertiaryDoctrines.map((doctrine, index) => (
                  <li key={index} className="flex items-start">
                    <CircleDashed className="h-6 w-6 text-[#004D70] opacity-60 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-[#333333]">{doctrine}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-[#004D4D] mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#004D4D]">Commitment to Unity and Grace</h2>
              </div>
              <p className="text-[#333333]">
                In all doctrinal matters, Calvinist Parrot Ministries commits to uphold doctrinal integrity while engaging believers with humility, gentleness, and respect (1 Peter 3:15). We strive for unity in essential beliefs, liberty in non-essentials, and charity in all things.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/" className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctrinalStatement;
