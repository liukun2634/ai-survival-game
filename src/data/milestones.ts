import type { AiMilestone } from '../engine/types';

export const milestones: AiMilestone[] = [
  {
    year: 2,
    title: { zh: 'AI 写作与客服全面成熟', en: 'AI Writing & Customer Service Goes Mainstream' },
    description: { zh: 'AI聊天机器人和写作工具已经能够处理大部分基础客服和内容创作工作。', en: 'AI chatbots and writing tools can now handle most basic customer service and content creation.' },
    effects: { safety: -15 },
    careerEffects: {
      customer_service: { safety: -25 },
      content_creator: { safety: -20 },
    },
  },
  {
    year: 5,
    title: { zh: 'AI 编程与设计能力突破', en: 'AI Coding & Design Breakthrough' },
    description: { zh: 'AI编程助手和AI绘画工具达到专业水平，初级技术岗位受到严重冲击。', en: 'AI coding assistants and art tools reach professional level. Junior tech roles severely impacted.' },
    effects: { safety: -15 },
    careerEffects: {
      programmer: { safety: -30 },
      designer: { safety: -30 },
      product_manager: { safety: -15 },
    },
  },
  {
    year: 8,
    title: { zh: '自动驾驶全面普及', en: 'Autonomous Driving Goes Mainstream' },
    description: { zh: '完全自动驾驶技术通过监管审批，出租车和货运行业开始大规模无人化。', en: 'Full self-driving passes regulatory approval. Taxi and freight industries begin massive automation.' },
    effects: { safety: -10 },
    careerEffects: {
      driver: { safety: -35 },
    },
  },
  {
    year: 12,
    title: { zh: 'AI 法律与财务自动化', en: 'AI Legal & Financial Automation' },
    description: { zh: 'AI能够独立处理大部分法律文书和财务审计工作，初级律师和会计需求锐减。', en: 'AI can independently handle most legal documents and financial audits. Junior lawyers and accountants in sharp decline.' },
    effects: { safety: -10 },
    careerEffects: {
      lawyer: { safety: -30 },
      accountant: { safety: -30 },
    },
  },
  {
    year: 16,
    title: { zh: 'AI 个性化教育崛起', en: 'AI Personalized Education Rises' },
    description: { zh: '每个学生都有AI私人教师，传统教育模式受到根本性挑战。', en: 'Every student has an AI private tutor. Traditional education faces fundamental challenges.' },
    effects: { safety: -10 },
    careerEffects: {
      teacher: { safety: -25 },
    },
  },
  {
    year: 20,
    title: { zh: 'AGI 初步实现', en: 'AGI Achieved' },
    description: { zh: '通用人工智能初步实现，几乎所有知识类工作都面临重新定义。', en: 'Artificial General Intelligence achieved. Nearly all knowledge work faces redefinition.' },
    effects: { safety: -20 },
    careerEffects: {
      doctor: { safety: -15 },
      programmer: { safety: -20 },
      lawyer: { safety: -20 },
      product_manager: { safety: -20 },
    },
  },
  {
    year: 25,
    title: { zh: 'AI 全面渗透各行业', en: 'AI Permeates All Industries' },
    description: { zh: 'AI已经深入每个行业的每个角落，只有最具创造力和人际能力的人才能保持优势。', en: 'AI has penetrated every corner of every industry. Only the most creative and interpersonal people maintain an edge.' },
    effects: { safety: -15 },
  },
];
