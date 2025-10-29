import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ as FAQType } from "../types";

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQType[] = [
    {
      question: "申请新加坡工作准证需要多长时间？",
      questionEn: "How long does it take to apply for a Singapore work permit?",
      answer: "EP申请通常需要3-8周。",
      answerEn: "EP applications typically take 3-8 weeks.",
    },
    {
      question: "申请PR的成功率如何？",
      questionEn: "What is the success rate for PR applications?",
      answer: "成功率取决于多个因素，包括工作经验、教育背景、薪资水平等。",
      answerEn:
        "Success rates depend on work experience, education, and salary.",
    },
    {
      question: "申请新加坡EP可以同时申请PR吗？",
      questionEn: "Can I apply for PR while holding an EP in Singapore?",
      answer:
        "通常建议先获得EP并稳定工作，再提交PR申请。我们会根据您的情况提供最佳申请策略。",
      answerEn:
        "It is generally recommended to secure an EP first and stabilize your employment before applying for PR. We provide tailored strategies based on your situation.",
    },
    {
      question: "EP被拒绝怎么办？",
      questionEn: "What if my EP application is rejected?",
      answer:
        "如果EP申请被拒，我们会分析拒签原因，并帮助您调整申请材料或探索其他合适的申请途径。",
      answerEn:
        "If your EP application is rejected, we analyze the reasons and assist you in revising documents or exploring alternative application options.",
    },
    {
      question: "你们提供加急服务吗？",
      questionEn: "Do you offer expedited services?",
      answer:
        "部分服务可以加急处理，具体取决于申请类型和政府政策。请联系我们了解加急选项及费用。",
      answerEn:
        "Some services can be expedited depending on the application type and government policies. Please contact us for expedited options and fees.",
    },
    {
      question: "申请PR是否需要本地工作经验？",
      questionEn: "Is local work experience required for PR application?",
      answer:
        "拥有本地工作经验会提高成功率，但不是绝对必要。我们会根据您的整体背景提供专业评估。",
      answerEn:
        "Local work experience can improve success chances, but it is not mandatory. We provide professional evaluation based on your overall profile.",
    },
    {
      question: "申请流程是否需要本人亲自到场？",
      questionEn:
        "Do I need to be physically present during the application process?",
      answer:
        "大部分流程可以在线处理，但某些阶段可能需要面试或签署文件。我们会提前告知您具体安排。",
      answerEn:
        "Most parts of the process can be handled online, but certain stages may require interviews or document signing. We inform you of the exact requirements in advance.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          常见问题 FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <div>
                  <div className="font-semibold text-gray-900">
                    {faq.question}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {faq.questionEn}
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-emerald-600 transition-transform ${
                    openFaq === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700 mb-2">{faq.answer}</p>
                  <p className="text-gray-600 text-sm">{faq.answerEn}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
