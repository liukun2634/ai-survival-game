import type { Career } from '../engine/types';

export const careers: Career[] = [
  {
    id: 'programmer',
    name: { zh: '程序员', en: 'Programmer' },
    description: { zh: '编写代码，构建数字世界。早期面临AI编程工具冲击，但技术转型能力强。', en: 'Writing code, building the digital world. Early AI coding tool impact, but strong tech adaptation.' },
    startingAttributes: { safety: 70, skill: 60, finance: 50, network: 30 },
    icon: '💻',
  },
  {
    id: 'designer',
    name: { zh: '平面设计师', en: 'Graphic Designer' },
    description: { zh: '创造视觉艺术。AI绘画工具冲击大，需要向创意策略方向发展。', en: 'Creating visual art. Major impact from AI art tools, need to evolve toward creative strategy.' },
    startingAttributes: { safety: 65, skill: 55, finance: 35, network: 35 },
    icon: '🎨',
  },
  {
    id: 'accountant',
    name: { zh: '会计', en: 'Accountant' },
    description: { zh: '管理财务数据。中期面临AI自动化冲击，但初期较为安全。', en: 'Managing financial data. Mid-term AI automation risk, but relatively safe early on.' },
    startingAttributes: { safety: 75, skill: 40, finance: 50, network: 30 },
    icon: '📊',
  },
  {
    id: 'teacher',
    name: { zh: '教师', en: 'Teacher' },
    description: { zh: '教书育人。AI个性化教育崛起后面临挑战，但人际连接能力强。', en: 'Educating people. Faces challenges when AI personalized education rises, but strong interpersonal connection.' },
    startingAttributes: { safety: 85, skill: 45, finance: 30, network: 40 },
    icon: '📚',
  },
  {
    id: 'customer_service',
    name: { zh: '客服', en: 'Customer Service' },
    description: { zh: '处理客户问题。最早被AI聊天机器人冲击，高难度职业。', en: 'Handling customer issues. First hit by AI chatbots. High difficulty career.' },
    startingAttributes: { safety: 60, skill: 35, finance: 25, network: 25 },
    icon: '📞',
  },
  {
    id: 'lawyer',
    name: { zh: '律师', en: 'Lawyer' },
    description: { zh: '维护法律公正。起点高但中期AI法律助手带来风险。', en: 'Upholding justice. High starting point but mid-term AI legal assistant risks.' },
    startingAttributes: { safety: 80, skill: 50, finance: 60, network: 50 },
    icon: '⚖️',
  },
  {
    id: 'driver',
    name: { zh: '司机', en: 'Driver' },
    description: { zh: '驾驶车辆运送乘客或货物。自动驾驶技术是最大威胁。', en: 'Driving vehicles for passengers or cargo. Autonomous driving is the biggest threat.' },
    startingAttributes: { safety: 65, skill: 30, finance: 30, network: 20 },
    icon: '🚗',
  },
  {
    id: 'content_creator',
    name: { zh: '自媒体人', en: 'Content Creator' },
    description: { zh: '创作内容吸引粉丝。收入不稳定但人脉资源丰富。', en: 'Creating content to attract followers. Unstable income but rich network resources.' },
    startingAttributes: { safety: 60, skill: 50, finance: 20, network: 55 },
    icon: '✍️',
  },
  {
    id: 'doctor',
    name: { zh: '医生', en: 'Doctor' },
    description: { zh: '救死扶伤。AI最难替代的职业之一，但生活事件较多。', en: 'Saving lives. One of the hardest careers for AI to replace, but more life events.' },
    startingAttributes: { safety: 90, skill: 55, finance: 55, network: 40 },
    icon: '🩺',
  },
  {
    id: 'product_manager',
    name: { zh: '产品经理', en: 'Product Manager' },
    description: { zh: '规划产品方向。各方面较为均衡，需要持续提升综合能力。', en: 'Planning product direction. Well-balanced stats, needs continuous improvement.' },
    startingAttributes: { safety: 75, skill: 55, finance: 45, network: 45 },
    icon: '📋',
  },
];
