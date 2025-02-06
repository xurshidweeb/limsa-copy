import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="border w-120 max-[520px]:w-100 max-[430px]:w-80 rounded-2xl border-gray-600  px-3 py-5">
      <button
        onClick={toggleOpen}
        className="w-full text-left text-lg font-medium text-white"
      >
        {question}
      </button>
      {isOpen && <div className="mt-2 text-gray-200">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Nega narxlar bunchalik arzon?",
      answer:
        "Loyihangizni 10 yildan ortiq tajribaga ega mutaxassislarga ishonib topshiring va qisqa vaqt ichida yuqori natijalarga erishing",
    },
    {
      question: "Kelajakda saytni o‘zim tahrirlashim mumkinmi?",
      answer: "Ha, albatta. Sizga kontent boshqaruv tizimiga (admin panel) kirish va undan foydalanish bo‘yicha qo‘llanma taqdim etiladi. Admin panel qulay interfeysga ega, tushunarli va maxsus bilim talab qilmaydi.",
    },
    {
      question: "Sayt tugallangandan keyin unga texnik xizmat ko‘rsatishni davom ettirasizmi?",
      answer: "Saytingizni yaratib bo‘lganimizdan so‘ng, uni bir yil davomida bepul 24/7 qo‘llab-quvvatlab turamiz. Bir yildan keyin esa xizmat narxi oyiga $10 bo‘ladi.",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="max-w-2xl flex flex-col gap-5 p-4">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
