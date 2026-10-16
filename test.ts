/* Запрос */

enum QuestionStatus {
  published = "published",
  draft = "draft",
  deleted = "deleted",
}

interface Question{
    topicId: number,
    status: QuestionStatus  
}
/* Ответ */
interface Answer{
    question: string,
    answer: string,
    tags:[string],
    likes: number,
    status: QuestionStatus
}

async function getFaqs(req: Question):Promise<Answer> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
