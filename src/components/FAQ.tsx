import { IFaq } from "../types/IFaq";

export default function FAQ({ question, answer }: IFaq) {
  return (
    <div className="faqs-item">
      <details>
        <summary>{question}</summary>
        <p>{answer}</p>
      </details>
    </div>
  );
}
