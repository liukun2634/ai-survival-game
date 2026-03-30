import type { GameEvent } from '../engine/types';

// ─────────────────────────────────────────────
// OPPORTUNITY EVENTS (12)
// ─────────────────────────────────────────────
const opportunityEvents: GameEvent[] = [
  {
    id: 'ai_startup_recruitment',
    type: 'opportunity',
    title: { zh: 'AI 创业公司招聘', en: 'AI Startup Recruitment' },
    description: { zh: '一家热门AI创业公司向你抛出橄榄枝，薪资优厚但风险较高。', en: 'A hot AI startup offers you a position with great pay but higher risk.' },
    options: [
      {
        id: 'join_startup',
        text: { zh: '加入创业公司', en: 'Join the startup' },
        effects: { skill: 15, finance: 10, safety: -5 },
        feedback: { zh: '你进入了AI行业最前线，收获颇多！', en: 'You entered the AI frontline and learned a lot!' },
      },
      {
        id: 'stay_current',
        text: { zh: '婉拒，留在原岗位', en: 'Decline, stay at current job' },
        effects: { safety: 5 },
        feedback: { zh: '你选择了稳定，但错过了这次机遇。', en: 'You chose stability but missed an opportunity.' },
      },
    ],
  },
  {
    id: 'online_course_launch',
    type: 'opportunity',
    title: { zh: '录制在线课程', en: 'Launch an Online Course' },
    description: { zh: '平台邀请你录制一门在线课程，需要花费大量时间准备，但可以建立被动收入。', en: 'A platform invites you to record an online course. Requires big time investment but builds passive income.' },
    options: [
      {
        id: 'record_course',
        text: { zh: '全力投入制作课程', en: 'Commit fully to creating the course' },
        effects: { finance: 15, network: 10, skill: 5, safety: -5 },
        feedback: { zh: '课程上线反响热烈，带来了稳定的被动收入！', en: 'The course launched to great reception and brings steady passive income!' },
      },
      {
        id: 'small_course',
        text: { zh: '利用业余时间制作', en: 'Work on it in spare time' },
        effects: { finance: 5, skill: 5 },
        feedback: { zh: '课程质量一般，但也有一些额外收入。', en: 'The course quality is average, but you earn some extra income.' },
      },
      {
        id: 'decline_course',
        text: { zh: '拒绝，专注本职工作', en: 'Decline, focus on main job' },
        effects: { safety: 5, skill: 5 },
        feedback: { zh: '你全力投入本职工作，技能稳步提升。', en: 'You focused on your job and steadily improved your skills.' },
      },
    ],
  },
  {
    id: 'industry_conference_speaker',
    type: 'opportunity',
    title: { zh: '行业大会演讲邀请', en: 'Industry Conference Speaking Invite' },
    description: { zh: '一个行业头部大会邀请你作演讲嘉宾，这是展示自己、拓展人脉的绝好机会。', en: 'A top industry conference invites you as a speaker — a great chance to showcase yourself and network.' },
    options: [
      {
        id: 'accept_speaker',
        text: { zh: '接受邀请，精心准备演讲', en: 'Accept and prepare a polished talk' },
        effects: { network: 20, skill: 5, safety: 5 },
        feedback: { zh: '演讲大获成功，你的行业声誉大幅提升！', en: 'Your talk was a hit and your industry reputation soared!' },
      },
      {
        id: 'attend_no_speak',
        text: { zh: '只参加不演讲，参与交流', en: 'Attend as audience, focus on networking' },
        effects: { network: 10 },
        feedback: { zh: '你结识了不少行业人士，但错过了更大的曝光机会。', en: 'You met many industry peers but missed a bigger exposure opportunity.' },
      },
    ],
  },
  {
    id: 'side_project_goes_viral',
    type: 'opportunity',
    title: { zh: '副业项目爆火', en: 'Side Project Goes Viral' },
    description: { zh: '你之前业余时间做的小工具突然在网上走红，获得了大量用户关注。', en: 'A small tool you built in your spare time suddenly goes viral and attracts massive attention.' },
    options: [
      {
        id: 'go_all_in',
        text: { zh: '辞职全力运营', en: 'Quit job and go all-in' },
        effects: { finance: 20, network: 15, safety: -20, skill: 10 },
        feedback: { zh: '高风险高回报！你的项目快速成长，但压力极大。', en: 'High risk, high reward! Your project grew fast, but the pressure was intense.' },
      },
      {
        id: 'maintain_balance',
        text: { zh: '兼顾本职工作慢慢运营', en: 'Maintain job while slowly developing it' },
        effects: { finance: 10, network: 10, skill: 5 },
        feedback: { zh: '两头兼顾虽然辛苦，但你保住了安全网。', en: 'Juggling both was tough, but you kept your safety net.' },
      },
      {
        id: 'sell_project',
        text: { zh: '出售项目套现', en: 'Sell the project for cash' },
        effects: { finance: 25, network: 5 },
        feedback: { zh: '你卖出了一个好价钱，一次性套现！', en: 'You sold it for a good price and cashed out!' },
        requiresNetwork: 30,
      },
    ],
  },
  {
    id: 'mentorship_offer',
    type: 'opportunity',
    title: { zh: '大牛愿意做你的导师', en: 'Industry Expert Offers Mentorship' },
    description: { zh: '一位在行业内颇具声望的前辈主动联系你，表示愿意定期指导你的职业发展。', en: 'A well-respected industry veteran reaches out and offers to regularly mentor your career.' },
    options: [
      {
        id: 'embrace_mentorship',
        text: { zh: '积极接受，认真执行建议', en: 'Embrace it and act on advice diligently' },
        effects: { skill: 15, network: 15, safety: 5 },
        feedback: { zh: '导师的指引让你少走了很多弯路，成长飞速！', en: 'Your mentor\'s guidance helped you avoid many pitfalls and grow quickly!' },
      },
      {
        id: 'casual_mentorship',
        text: { zh: '保持联系但不刻意跟进', en: 'Keep contact but don\'t follow up actively' },
        effects: { network: 10 },
        feedback: { zh: '你们关系不错，但没有深入利用这个机会。', en: 'You maintained a good relationship but didn\'t fully leverage the opportunity.' },
      },
    ],
  },
  {
    id: 'freelance_project_opportunity',
    type: 'opportunity',
    title: { zh: '高薪自由接单机会', en: 'High-Paying Freelance Project' },
    description: { zh: '一位客户通过朋友介绍联系到你，希望你接一个报酬丰厚的短期项目。', en: 'A client introduced through a friend wants you to take on a short but lucrative project.' },
    options: [
      {
        id: 'accept_freelance',
        text: { zh: '接单，利用业余时间完成', en: 'Accept and complete it in spare time' },
        effects: { finance: 20, skill: 10, safety: -5 },
        feedback: { zh: '项目顺利完成，丰厚的报酬让你的财务状况大幅改善！', en: 'Project completed successfully — the pay greatly improved your finances!' },
      },
      {
        id: 'decline_freelance',
        text: { zh: '拒绝，避免影响正职', en: 'Decline to avoid affecting main job' },
        effects: { safety: 5 },
        feedback: { zh: '你保住了稳定，但错过了一笔额外收入。', en: 'You stayed stable but missed extra income.' },
      },
    ],
  },
  {
    id: 'ai_tools_early_adopter',
    type: 'opportunity',
    title: { zh: '率先掌握AI工具', en: 'Early AI Tool Adoption' },
    description: { zh: '公司推广一批新的AI效率工具，你有机会率先学习并成为团队的AI专家。', en: 'Your company is rolling out new AI productivity tools. You have a chance to learn them first and become the team expert.' },
    options: [
      {
        id: 'learn_ai_tools',
        text: { zh: '积极学习，成为团队AI达人', en: 'Learn aggressively and become the team AI expert' },
        effects: { skill: 20, safety: 10, network: 5 },
        feedback: { zh: '你成为了团队里AI工具的第一人，地位明显提升！', en: 'You became the team AI expert and your standing rose significantly!' },
      },
      {
        id: 'basic_ai_learning',
        text: { zh: '学基本用法就行', en: 'Learn just the basics' },
        effects: { skill: 5 },
        feedback: { zh: '你掌握了基本操作，但没有抓住脱颖而出的机会。', en: 'You learned the basics but missed a chance to stand out.' },
      },
    ],
    minYear: 1,
  },
  {
    id: 'investment_opportunity',
    type: 'opportunity',
    title: { zh: '投资机会出现', en: 'Investment Opportunity Arises' },
    description: { zh: '一位朋友邀请你参与一个看起来很有潜力的早期投资项目，但需要一定本金。', en: 'A friend invites you to join an early-stage investment with promising potential, but requires upfront capital.' },
    options: [
      {
        id: 'invest_all_in',
        text: { zh: '大额投入，搏一把', en: 'Invest big and bet on it' },
        effects: { finance: 30, safety: -15 },
        feedback: { zh: '投资成功，丰厚回报！但这段时间你压力很大。', en: 'Investment paid off with great returns! But it was a stressful period.' },
        requiresFinance: 40,
      },
      {
        id: 'invest_small',
        text: { zh: '小额试水', en: 'Invest a small amount cautiously' },
        effects: { finance: 10, safety: -5 },
        feedback: { zh: '稳健的小额投资带来了适度回报。', en: 'A cautious small investment brought moderate returns.' },
        requiresFinance: 20,
      },
      {
        id: 'skip_invest',
        text: { zh: '不参与，观望', en: 'Pass, observe from the sidelines' },
        effects: { safety: 5 },
        feedback: { zh: '你保持谨慎，没有冒险。', en: 'You stayed cautious and avoided the risk.' },
      },
    ],
    minYear: 3,
  },
  {
    id: 'open_source_contribution',
    type: 'opportunity',
    title: { zh: '开源项目贡献机会', en: 'Open Source Contribution Opportunity' },
    description: { zh: '一个流行的开源项目需要核心贡献者，参与其中可以大幅提升你的技术声誉。', en: 'A popular open source project needs core contributors. Joining can greatly boost your technical reputation.' },
    careerIds: ['programmer', 'designer', 'product_manager'],
    options: [
      {
        id: 'deep_contribute',
        text: { zh: '深度参与，成为核心贡献者', en: 'Go deep and become a core contributor' },
        effects: { skill: 20, network: 15, safety: 5, finance: -5 },
        feedback: { zh: '你的技术影响力大幅提升，圈内人脉快速扩展！', en: 'Your technical influence soared and your network in the community expanded rapidly!' },
      },
      {
        id: 'light_contribute',
        text: { zh: '偶尔提交，保持存在感', en: 'Contribute occasionally to stay visible' },
        effects: { skill: 8, network: 8 },
        feedback: { zh: '你保持了社区参与，建立了一定的声誉。', en: 'You stayed engaged in the community and built some reputation.' },
      },
    ],
  },
  {
    id: 'company_promotion_chance',
    type: 'opportunity',
    title: { zh: '晋升机会来临', en: 'Promotion Opportunity Arises' },
    description: { zh: '公司内部有个管理岗位空缺，你的直属上司推荐了你，这意味着更高的薪资和更大的责任。', en: 'An internal management position opens up and your direct manager recommends you — more pay, more responsibility.' },
    options: [
      {
        id: 'take_promotion',
        text: { zh: '积极争取，接受晋升', en: 'Go for it and accept the promotion' },
        effects: { finance: 15, network: 10, safety: 5, skill: -5 },
        feedback: { zh: '晋升成功！你的职业地位和收入都获得了提升，但技术积累有所减少。', en: 'Promotion successful! Your status and income rose, but hands-on technical time decreased.' },
      },
      {
        id: 'decline_promotion',
        text: { zh: '婉拒，专注技术深度', en: 'Decline, focus on deepening technical skills' },
        effects: { skill: 15, safety: 5 },
        feedback: { zh: '你放弃了管理之路，深耕技术，成为不可替代的专家。', en: 'You chose the specialist path and became an irreplaceable expert.' },
      },
    ],
    minYear: 3,
  },
  {
    id: 'overseas_opportunity',
    type: 'opportunity',
    title: { zh: '海外工作机会', en: 'Overseas Work Opportunity' },
    description: { zh: '一家国际公司提供了海外工作机会，薪资更高，但需要离开熟悉的环境。', en: 'An international company offers an overseas position with better pay, but requires leaving your comfort zone.' },
    options: [
      {
        id: 'go_overseas',
        text: { zh: '接受挑战，前往海外', en: 'Accept the challenge and go overseas' },
        effects: { finance: 20, network: 20, skill: 10, safety: -10 },
        feedback: { zh: '海外经历大幅拓宽了你的视野和国际人脉！', en: 'The overseas experience greatly broadened your perspective and international network!' },
      },
      {
        id: 'stay_local',
        text: { zh: '留在国内，寻找本地机会', en: 'Stay local and find opportunities here' },
        effects: { safety: 10, network: 5 },
        feedback: { zh: '你选择了稳定，在本地继续稳步发展。', en: 'You chose stability and continued steady growth locally.' },
      },
    ],
    minYear: 2,
  },
  {
    id: 'networking_event_key_connection',
    type: 'opportunity',
    title: { zh: '关键人脉邂逅', en: 'Key Connection at Networking Event' },
    description: { zh: '在一次行业聚会上，你偶然认识了一位在业界颇有影响力的人物，对方对你印象深刻。', en: 'At an industry gathering, you happen to meet a highly influential figure who is impressed by you.' },
    options: [
      {
        id: 'deepen_connection',
        text: { zh: '主动深化关系，保持联络', en: 'Proactively deepen the relationship' },
        effects: { network: 25, safety: 5 },
        feedback: { zh: '这段关系成为你职业发展的重要资源！', en: 'This connection became a major career asset!' },
      },
      {
        id: 'exchange_contacts',
        text: { zh: '交换联系方式，不刻意跟进', en: 'Exchange contacts but don\'t follow up' },
        effects: { network: 10 },
        feedback: { zh: '你们偶尔联系，关系泛泛。', en: 'You stayed in occasional contact but the relationship remained casual.' },
      },
    ],
  },
];

// ─────────────────────────────────────────────
// CRISIS EVENTS (12)
// ─────────────────────────────────────────────
const crisisEvents: GameEvent[] = [
  {
    id: 'layoff_wave',
    type: 'crisis',
    title: { zh: '公司大裁员', en: 'Company Layoff Wave' },
    description: { zh: '公司宣布大规模裁员，你的部门也在裁员名单上，你必须想办法自保。', en: 'The company announces mass layoffs. Your department is on the list. You need to find a way to survive.' },
    options: [
      {
        id: 'prove_value',
        text: { zh: '主动表现价值，争取留下', en: 'Actively demonstrate your value to stay' },
        effects: { safety: 5, skill: 5, network: -5 },
        feedback: { zh: '你的努力被管理层看见，成功保住了饭碗！', en: 'Management noticed your efforts and you kept your job!' },
      },
      {
        id: 'network_escape',
        text: { zh: '紧急联系人脉，寻找跳槽机会', en: 'Urgently tap your network for other opportunities' },
        effects: { safety: -5, network: 10, finance: 5 },
        feedback: { zh: '你通过人脉找到了新工作，薪资还略有提升。', en: 'You found a new job through your network, even with a slight raise.' },
        requiresNetwork: 30,
      },
      {
        id: 'accept_layoff',
        text: { zh: '接受裁员，用离职金休整', en: 'Accept the layoff and use severance to rest' },
        effects: { safety: -20, finance: 5, skill: 10 },
        feedback: { zh: '你利用休整期提升了技能，但安全感大幅降低。', en: 'You used the break to upskill, but your job security took a big hit.' },
      },
    ],
  },
  {
    id: 'ai_replaces_tasks',
    type: 'crisis',
    title: { zh: 'AI 开始替代你的日常工作', en: 'AI Starts Replacing Your Daily Tasks' },
    description: { zh: '公司引入AI系统，你曾经承担的大量重复性工作开始被自动化，你的岗位价值受到质疑。', en: 'Your company adopts AI systems. Much of your repetitive work is now automated and your role\'s value is being questioned.' },
    options: [
      {
        id: 'upskill_quickly',
        text: { zh: '快速提升高阶能力，做AI无法做的事', en: 'Rapidly upskill to do what AI cannot' },
        effects: { skill: 20, safety: 5, finance: -5 },
        feedback: { zh: '你成功转型为更高价值的工作，AI反而成了你的助手！', en: 'You successfully transitioned to higher-value work. AI became your assistant!' },
      },
      {
        id: 'complain_resist',
        text: { zh: '抵制AI工具，坚持旧方式', en: 'Resist AI tools and stick to the old way' },
        effects: { safety: -15, skill: -5 },
        feedback: { zh: '你的抵制让管理层认为你难以适应变化，处境更加被动。', en: 'Your resistance led management to see you as unable to adapt, worsening your position.' },
      },
      {
        id: 'use_ai_strategically',
        text: { zh: '积极用AI工具提高效率', en: 'Embrace AI tools to boost efficiency' },
        effects: { skill: 10, safety: 5 },
        feedback: { zh: '你用AI大幅提高了效率，成为团队里效率最高的人。', en: 'You leveraged AI and became the most productive person on the team.' },
      },
    ],
    minYear: 2,
  },
  {
    id: 'health_crisis',
    type: 'crisis',
    title: { zh: '健康亮起红灯', en: 'Health Scare' },
    description: { zh: '长期高压工作导致你身体出现问题，医生建议你减少工作量，好好休养。', en: 'Long-term high-pressure work has taken a toll on your health. The doctor advises you to reduce workload and rest.' },
    options: [
      {
        id: 'take_break',
        text: { zh: '听从医生建议，认真休养', en: 'Follow the doctor\'s advice and rest properly' },
        effects: { safety: 5, finance: -15, skill: -5 },
        feedback: { zh: '你的身体恢复了，但收入和工作节奏受到了影响。', en: 'Your health recovered, but income and work rhythm took a hit.' },
      },
      {
        id: 'push_through',
        text: { zh: '硬撑，不敢停下', en: 'Push through, afraid to stop' },
        effects: { safety: -15, finance: 5, skill: 5 },
        feedback: { zh: '短期保住了工作，但健康隐患让你的长期前景更加危险。', en: 'Short-term you kept your job, but the hidden health risks made your future more precarious.' },
      },
      {
        id: 'transfer_to_lighter_role',
        text: { zh: '申请调换压力较小的岗位', en: 'Apply for a lower-stress internal transfer' },
        effects: { safety: -5, finance: -5, network: 5 },
        feedback: { zh: '你成功转岗，工作压力减轻，生活质量提升了。', en: 'You transferred successfully, reducing pressure and improving quality of life.' },
      },
    ],
  },
  {
    id: 'economic_downturn',
    type: 'crisis',
    title: { zh: '经济下行，行业寒冬', en: 'Economic Downturn, Industry Winter' },
    description: { zh: '宏观经济下行，整个行业缩减招聘甚至开始裁员，岗位竞争空前激烈。', en: 'The macro economy is declining. The whole industry is cutting hiring and even laying off. Job competition is fierce.' },
    options: [
      {
        id: 'strengthen_current_role',
        text: { zh: '深耕现有岗位，成为不可替代的人', en: 'Deepen current role, become irreplaceable' },
        effects: { safety: 10, skill: 10, finance: -5 },
        feedback: { zh: '你在寒冬中坚守住了阵地，表现突出。', en: 'You held your ground through the winter and stood out.' },
      },
      {
        id: 'expand_income_streams',
        text: { zh: '开发副业，多元化收入', en: 'Develop side income for diversification' },
        effects: { finance: 10, safety: -5, skill: 5 },
        feedback: { zh: '多元化收入帮助你度过了最艰难的时期。', en: 'Diversified income helped you through the hardest period.' },
      },
      {
        id: 'cut_expenses_save',
        text: { zh: '节省开支，积累储备', en: 'Cut expenses and build savings' },
        effects: { finance: 15, safety: 5 },
        feedback: { zh: '你积累了充足的储备，拥有了更多抵御风险的底气。', en: 'You built solid savings and gained more resilience against risks.' },
      },
    ],
    minYear: 3,
  },
  {
    id: 'competitor_ai_product',
    type: 'crisis',
    title: { zh: '竞争对手发布颠覆性AI产品', en: 'Competitor Launches Disruptive AI Product' },
    description: { zh: '你的公司业务被竞争对手的AI产品严重冲击，公司陷入危机，前途未卜。', en: 'A competitor\'s AI product severely disrupts your company\'s business, sending it into crisis.' },
    options: [
      {
        id: 'pivot_learn_new',
        text: { zh: '主动学习竞品技术，寻求内部转型', en: 'Proactively learn the competing tech and seek internal pivot' },
        effects: { skill: 20, safety: -5, network: 5 },
        feedback: { zh: '你掌握了新技术，成为公司转型的关键人才！', en: 'You mastered the new tech and became key to the company\'s transformation!' },
      },
      {
        id: 'jump_ship',
        text: { zh: '尽快跳槽，离开危机公司', en: 'Leave quickly before things get worse' },
        effects: { safety: -10, finance: 5, network: 10 },
        feedback: { zh: '你及时止损，在新公司重新出发。', en: 'You cut your losses and made a fresh start at a new company.' },
        requiresNetwork: 25,
      },
      {
        id: 'ride_it_out',
        text: { zh: '留守，等待公司渡过难关', en: 'Stay and wait for the company to recover' },
        effects: { safety: -15, finance: -5 },
        feedback: { zh: '公司恢复遥遥无期，你的处境越来越艰难。', en: 'Company recovery seems distant and your situation grows harder.' },
      },
    ],
    minYear: 4,
  },
  {
    id: 'skill_obsolescence',
    type: 'crisis',
    title: { zh: '核心技能过时', en: 'Core Skills Become Obsolete' },
    description: { zh: '行业技术栈快速更迭，你赖以为生的核心技能正在快速贬值，市场需求急剧萎缩。', en: 'The industry\'s tech stack is changing fast. Your core skills are rapidly depreciating and market demand is shrinking.' },
    options: [
      {
        id: 'intensive_reskill',
        text: { zh: '全力自学转型，拼命更新技能', en: 'Go all-in on self-study and reskill intensively' },
        effects: { skill: 25, safety: -10, finance: -5 },
        feedback: { zh: '经过痛苦的转型期，你成功进入了新的技术领域！', en: 'After a painful transition, you successfully entered a new technical domain!' },
      },
      {
        id: 'find_niche',
        text: { zh: '在旧技能中寻找利基市场', en: 'Find a niche market for your old skills' },
        effects: { finance: 5, safety: -5, network: 10 },
        feedback: { zh: '你在传统行业找到了仍然需要旧技能的客户群体。', en: 'You found a customer base in traditional industries that still needs your old skills.' },
      },
      {
        id: 'do_nothing',
        text: { zh: '顺其自然，走一步看一步', en: 'Let things play out, wait and see' },
        effects: { safety: -20, skill: -5 },
        feedback: { zh: '你的被动让处境越来越糟，市场价值持续下滑。', en: 'Your passivity worsened your situation and market value kept declining.' },
      },
    ],
  },
  {
    id: 'job_scam',
    type: 'crisis',
    title: { zh: '遭遇职业欺诈', en: 'Job Scam Encounter' },
    description: { zh: '你收到了一个看起来条件非常优越的工作邀约，但事后发现这可能是一个骗局。', en: 'You receive a job offer with seemingly amazing conditions, but it turns out it may be a scam.' },
    options: [
      {
        id: 'investigate_before_join',
        text: { zh: '仔细调查后再做决定', en: 'Investigate thoroughly before deciding' },
        effects: { safety: 10, skill: 5 },
        feedback: { zh: '你的谨慎让你避开了这个陷阱，还锻炼了识别骗局的能力。', en: 'Your caution helped you avoid the trap and sharpened your scam-detection skills.' },
      },
      {
        id: 'fell_for_scam',
        text: { zh: '贸然接受，损失惨重', en: 'Rush in and suffer the consequences' },
        effects: { finance: -20, safety: -15, network: -5 },
        feedback: { zh: '你蒙受了重大损失，职业声誉也受到了影响。', en: 'You suffered significant losses and your professional reputation was damaged.' },
      },
    ],
  },
  {
    id: 'bad_performance_review',
    type: 'crisis',
    title: { zh: '绩效考核不达标', en: 'Poor Performance Review' },
    description: { zh: '今年的绩效考核结果让你大失所望，没有达到预期，面临降职降薪的风险。', en: 'This year\'s performance review was disappointing — below expectations, putting you at risk of demotion or pay cut.' },
    options: [
      {
        id: 'accept_improve_plan',
        text: { zh: '虚心接受，制定改进计划', en: 'Humbly accept and create an improvement plan' },
        effects: { skill: 15, safety: 5, network: 5 },
        feedback: { zh: '你痛定思痛，制定了系统的改进计划，下次考核大幅提升！', en: 'You reflected deeply, made a systematic improvement plan, and aced the next review!' },
      },
      {
        id: 'blame_externally',
        text: { zh: '归咎于外部因素，不服气', en: 'Blame external factors and push back' },
        effects: { safety: -15, network: -10 },
        feedback: { zh: '你的不服让管理层印象更差，关系持续恶化。', en: 'Your pushback worsened management\'s impression and relationships deteriorated further.' },
      },
      {
        id: 'transfer_request',
        text: { zh: '申请换部门，另起炉灶', en: 'Request a department transfer and start fresh' },
        effects: { safety: -5, network: 5, skill: 5 },
        feedback: { zh: '换了环境，你反而如鱼得水，重新找回了工作状态。', en: 'In a new environment, you thrived and rediscovered your work rhythm.' },
      },
    ],
  },
  {
    id: 'data_breach_blame',
    type: 'crisis',
    title: { zh: '数据泄露，你被牵连', en: 'Data Breach — You\'re Implicated' },
    description: { zh: '公司发生了一起严重的数据安全事件，你曾经负责相关系统，被调查组质询。', en: 'A serious data security incident occurred at your company. You were responsible for the related system and are being investigated.' },
    careerIds: ['programmer', 'product_manager', 'lawyer'],
    options: [
      {
        id: 'cooperate_fully',
        text: { zh: '全力配合调查，清白自证', en: 'Fully cooperate with the investigation to prove innocence' },
        effects: { safety: 5, skill: 5, network: -5 },
        feedback: { zh: '调查结果证明你没有违规，你的专业态度赢得了信任。', en: 'The investigation cleared you and your professional attitude earned trust.' },
      },
      {
        id: 'lawyer_up',
        text: { zh: '聘请律师，保护自身权益', en: 'Hire a lawyer to protect your rights' },
        effects: { safety: 10, finance: -15, network: 5 },
        feedback: { zh: '律师帮你顺利度过了危机，但费用不菲。', en: 'The lawyer helped you through the crisis, but at a significant cost.' },
        requiresFinance: 30,
      },
      {
        id: 'take_blame',
        text: { zh: '背下锅，换取公司补偿', en: 'Take the fall in exchange for company compensation' },
        effects: { safety: -20, finance: 10, network: -15 },
        feedback: { zh: '你拿到了补偿，但职业声誉受到了严重损害。', en: 'You got compensation but your professional reputation was seriously damaged.' },
      },
    ],
    minYear: 3,
  },
  {
    id: 'burnout',
    type: 'crisis',
    title: { zh: '职业倦怠来袭', en: 'Burnout Strikes' },
    description: { zh: '长期超负荷工作让你身心俱疲，对工作完全提不起兴趣，效率大幅下滑。', en: 'Years of overwork have left you completely burned out — no motivation, efficiency plummeting.' },
    options: [
      {
        id: 'sabbatical',
        text: { zh: '申请休假，彻底充电', en: 'Take a sabbatical to fully recharge' },
        effects: { safety: -10, finance: -10, skill: 10, network: 5 },
        feedback: { zh: '休假让你重新找回了热情，回归时状态更佳！', en: 'The time off helped you rediscover your passion. You came back stronger!' },
      },
      {
        id: 'career_pivot',
        text: { zh: '趁机转变方向，尝试新领域', en: 'Use this as a chance to pivot to a new area' },
        effects: { safety: -15, skill: 10, network: 10, finance: -5 },
        feedback: { zh: '转型之路充满挑战，但你找到了新的方向和意义！', en: 'The transition was challenging but you found new direction and meaning!' },
      },
      {
        id: 'power_through_burnout',
        text: { zh: '硬撑，不敢放慢脚步', en: 'Power through without slowing down' },
        effects: { safety: -10, skill: -10, finance: 5 },
        feedback: { zh: '短期内维持了收入，但状态越来越差，危机只是在积累。', en: 'Income was maintained short-term, but your state worsened and the crisis only compounded.' },
      },
    ],
    minYear: 5,
  },
  {
    id: 'rumor_at_work',
    type: 'crisis',
    title: { zh: '职场谣言风波', en: 'Workplace Rumor Crisis' },
    description: { zh: '职场中突然出现了关于你的负面谣言，影响了你在同事和上司心目中的形象。', en: 'Negative rumors about you suddenly spread at work, affecting your image with colleagues and management.' },
    options: [
      {
        id: 'address_directly',
        text: { zh: '直接与当事人和管理层沟通', en: 'Address it directly with those involved and management' },
        effects: { network: 10, safety: 5 },
        feedback: { zh: '你的坦诚和直接解决了误会，反而赢得了信任！', en: 'Your openness and directness cleared the misunderstanding and earned trust!' },
      },
      {
        id: 'prove_by_results',
        text: { zh: '用工作成果说话，不与谣言正面交锋', en: 'Let your results speak for themselves' },
        effects: { skill: 10, safety: -5 },
        feedback: { zh: '出色的工作成果慢慢平息了谣言，但你也付出了很大压力。', en: 'Excellent results slowly quelled the rumors, but at significant personal cost.' },
      },
    ],
  },
  {
    id: 'key_client_lost',
    type: 'crisis',
    title: { zh: '核心客户流失', en: 'Key Client Lost' },
    description: { zh: '你负责维护的一个重要客户宣布终止合作，公司要求你解释原因并承担责任。', en: 'A major client you were managing announces they\'re ending the partnership. The company demands an explanation and accountability.' },
    careerIds: ['lawyer', 'product_manager', 'content_creator', 'teacher'],
    options: [
      {
        id: 'own_mistake',
        text: { zh: '坦诚承担责任，提出弥补方案', en: 'Own the responsibility and propose remedies' },
        effects: { safety: -5, network: 5, skill: 10 },
        feedback: { zh: '你的担当让管理层刮目相看，从错误中总结出宝贵经验。', en: 'Your accountability impressed management and you drew valuable lessons from the mistake.' },
      },
      {
        id: 'shift_blame',
        text: { zh: '将责任推给其他部门', en: 'Shift blame to other departments' },
        effects: { safety: -15, network: -15 },
        feedback: { zh: '推卸责任让你失去了同事的信任，长期来看伤害更大。', en: 'Shifting blame cost you colleagues\' trust — the long-term damage was far greater.' },
      },
      {
        id: 'salvage_client',
        text: { zh: '拼尽全力挽留客户', en: 'Give everything to try to win back the client' },
        effects: { safety: 5, network: 10, skill: 5, finance: -5 },
        feedback: { zh: '你的努力感动了客户，成功保住了合作关系！', en: 'Your efforts moved the client and you saved the partnership!' },
        requiresNetwork: 35,
      },
    ],
    minYear: 2,
  },
];

// ─────────────────────────────────────────────
// LIFE EVENTS (10)
// ─────────────────────────────────────────────
const lifeEvents: GameEvent[] = [
  {
    id: 'family_relocation',
    type: 'life',
    title: { zh: '家庭需要搬迁', en: 'Family Relocation Required' },
    description: { zh: '家庭原因要求你搬到另一座城市，你需要在职业延续和家庭责任之间做出艰难选择。', en: 'Family circumstances require you to move to another city. You must make a difficult choice between career continuity and family responsibility.' },
    options: [
      {
        id: 'relocate_family_first',
        text: { zh: '家庭优先，搬迁并寻找新工作', en: 'Family first — relocate and find a new job' },
        effects: { safety: -15, network: -5, finance: -10, skill: 5 },
        feedback: { zh: '你选择了家庭，在新城市重新起步，比预想中更艰难，但你不后悔。', en: 'You chose family. Starting over in a new city was harder than expected, but you don\'t regret it.' },
      },
      {
        id: 'remote_work_solution',
        text: { zh: '争取远程工作，两头兼顾', en: 'Negotiate remote work to balance both' },
        effects: { safety: -5, network: 5, skill: 5 },
        feedback: { zh: '你成功争取到了远程办公，找到了平衡点。', en: 'You successfully negotiated remote work and found a balance.' },
      },
      {
        id: 'career_first',
        text: { zh: '职业优先，暂时分居', en: 'Career first — temporarily live apart' },
        effects: { safety: 5, finance: 5, network: -10 },
        feedback: { zh: '你保住了职业轨道，但家庭关系承受了压力。', en: 'You stayed on career track but family relationships came under strain.' },
      },
    ],
  },
  {
    id: 'new_baby',
    type: 'life',
    title: { zh: '迎来新生儿', en: 'New Baby Arrives' },
    description: { zh: '恭喜你即将迎来宝宝！但同时也意味着更大的家庭经济压力和精力分散。', en: 'Congratulations, a baby is on the way! But it also means greater financial pressure and divided attention.' },
    options: [
      {
        id: 'take_parental_leave',
        text: { zh: '申请陪产/产假，全力陪伴', en: 'Take parental leave and fully accompany the family' },
        effects: { safety: -5, finance: -10, network: 5 },
        feedback: { zh: '你陪伴了孩子成长的关键时期，家庭关系更加紧密，但职业节奏被打乱。', en: 'You were present for key early moments. Family bonds strengthened but career rhythm was disrupted.' },
      },
      {
        id: 'hire_help',
        text: { zh: '聘请帮手，维持工作节奏', en: 'Hire help to maintain work rhythm' },
        effects: { safety: 5, finance: -15, skill: 5 },
        feedback: { zh: '你保住了工作状态，经济压力略有增加，但整体运转良好。', en: 'You maintained work momentum. Finances tightened a bit but overall things worked out.' },
        requiresFinance: 35,
      },
      {
        id: 'adjust_work_hours',
        text: { zh: '调整工时，在工作和家庭间找平衡', en: 'Adjust work hours to balance work and family' },
        effects: { safety: -5, skill: -5, finance: -5, network: 10 },
        feedback: { zh: '你在两者之间找到了还算不错的平衡点。', en: 'You found a workable balance between both worlds.' },
      },
    ],
  },
  {
    id: 'continuing_education_choice',
    type: 'life',
    title: { zh: '是否要继续深造', en: 'To Further Your Education or Not' },
    description: { zh: '有机会参加一个高质量的在职学习项目，但需要投入大量时间和金钱。', en: 'An opportunity to join a high-quality part-time academic program. Requires significant time and money investment.' },
    options: [
      {
        id: 'go_back_to_school',
        text: { zh: '全力投入，拿到高学历证书', en: 'Commit fully and earn the credential' },
        effects: { skill: 20, network: 10, finance: -20, safety: -5 },
        feedback: { zh: '两年苦读后，你拿到了学历，打开了新的职业大门！', en: 'Two years of hard study paid off — new career doors opened!' },
      },
      {
        id: 'self_study_instead',
        text: { zh: '自学替代，节省开销', en: 'Self-study instead to save money' },
        effects: { skill: 10, finance: 0 },
        feedback: { zh: '自学虽没有证书，但同样积累了实用知识。', en: 'No credential from self-study, but you gained practical knowledge.' },
      },
      {
        id: 'decline_education',
        text: { zh: '暂时搁置，专注工作', en: 'Put it on hold and focus on work' },
        effects: { safety: 5, finance: 5 },
        feedback: { zh: '你专注在岗位上，稳步推进现有职业路径。', en: 'You focused on your role and steadily advanced on your current path.' },
      },
    ],
    minYear: 2,
  },
  {
    id: 'work_life_balance_crisis',
    type: 'life',
    title: { zh: '生活与工作的失衡', en: 'Work-Life Balance Crisis' },
    description: { zh: '你意识到自己已经很久没有好好休息过了，生活质量一落千丈，你开始重新审视优先级。', en: 'You realize you haven\'t truly rested in a long time. Quality of life has plummeted and you\'re rethinking priorities.' },
    options: [
      {
        id: 'rebalance_life',
        text: { zh: '主动减少工作时间，重拾生活', en: 'Proactively reduce work hours, reclaim life' },
        effects: { safety: -5, finance: -5, network: 10, skill: 5 },
        feedback: { zh: '生活质量提升，你重新充满了活力，工作效率反而提高了！', en: 'Quality of life improved and you regained energy — work efficiency actually increased!' },
      },
      {
        id: 'optimize_efficiency',
        text: { zh: '提升工作效率，用质量换时间', en: 'Optimize efficiency to buy back time through quality' },
        effects: { skill: 15, safety: 5, finance: 5 },
        feedback: { zh: '你提高了单位时间的产出，在不降低成果的前提下找回了一些时间。', en: 'You increased per-hour output and reclaimed time without sacrificing results.' },
      },
      {
        id: 'accept_imbalance',
        text: { zh: '接受现状，继续高强度工作', en: 'Accept the imbalance and keep the high intensity' },
        effects: { finance: 10, safety: -5, skill: -5 },
        feedback: { zh: '收入保住了，但生活质量持续降低，你感觉越来越空洞。', en: 'Income held, but quality of life kept declining and you felt increasingly hollow.' },
      },
    ],
  },
  {
    id: 'parent_needs_care',
    type: 'life',
    title: { zh: '父母需要照料', en: 'Parent Needs Care' },
    description: { zh: '你的父母年迈体弱，需要你花更多时间和精力照顾，这与你的职业发展形成矛盾。', en: 'Your aging parents need more of your time and energy, creating tension with your career development.' },
    options: [
      {
        id: 'prioritize_parents',
        text: { zh: '家庭为主，减少工作投入', en: 'Prioritize family and reduce work commitment' },
        effects: { safety: -10, finance: -10, network: 10 },
        feedback: { zh: '你选择了陪伴，这段时光是无价的，但职业发展暂时放慢了。', en: 'You chose to be present. That time was priceless, but career growth slowed temporarily.' },
      },
      {
        id: 'hire_caregiver',
        text: { zh: '聘请护理人员分担', en: 'Hire a caregiver to share the burden' },
        effects: { safety: 5, finance: -20, skill: 5 },
        feedback: { zh: '专业护理让父母得到了良好照料，你也维持了工作状态。', en: 'Professional care gave your parents quality support and you maintained your work pace.' },
        requiresFinance: 40,
      },
      {
        id: 'remote_care_arrangement',
        text: { zh: '安排远程照护方案', en: 'Arrange a remote care solution' },
        effects: { safety: 0, finance: -10, network: 5 },
        feedback: { zh: '你找到了一个折中方案，两端都照顾到了，虽然不完美。', en: 'You found a compromise solution that addressed both sides, imperfect but workable.' },
      },
    ],
  },
  {
    id: 'housing_decision',
    type: 'life',
    title: { zh: '是否买房的抉择', en: 'To Buy a House or Not' },
    description: { zh: '房价出现波动，有人建议你入市买房，但这意味着巨大的财务压力。', en: 'Housing prices are fluctuating and some advise you to buy now, but it means enormous financial pressure.' },
    options: [
      {
        id: 'buy_house',
        text: { zh: '咬牙买房，建立资产', en: 'Bite the bullet and buy, build an asset' },
        effects: { finance: -25, safety: 10, network: 5 },
        feedback: { zh: '房贷压力巨大，但你有了稳定的居所和长期资产。', en: 'Mortgage pressure is heavy but you have a stable home and long-term asset.' },
        requiresFinance: 50,
      },
      {
        id: 'continue_renting',
        text: { zh: '继续租房，保持财务灵活性', en: 'Keep renting and maintain financial flexibility' },
        effects: { safety: 5, finance: 10 },
        feedback: { zh: '你保持了财务的灵活性，有更多资金用于投资自身。', en: 'You maintained financial flexibility with more capital for self-investment.' },
      },
      {
        id: 'invest_instead',
        text: { zh: '将首付资金用于其他投资', en: 'Invest the down-payment money elsewhere' },
        effects: { finance: 15, safety: -10 },
        feedback: { zh: '投资回报不错，但市场波动让你寝食难安。', en: 'Investment returns were decent, but market volatility kept you up at night.' },
        requiresFinance: 40,
      },
    ],
    minYear: 3,
  },
  {
    id: 'friendship_network_maintenance',
    type: 'life',
    title: { zh: '人脉关系的维护', en: 'Maintaining Your Network' },
    description: { zh: '你意识到多年来忙于工作，很多重要的人脉关系已经慢慢疏远，需要重新维护。', en: 'You realize years of busyness have let important relationships drift. It\'s time to reconnect.' },
    options: [
      {
        id: 'active_reconnect',
        text: { zh: '主动联系，组织聚会重建关系', en: 'Actively reach out and organize gatherings to rebuild' },
        effects: { network: 20, finance: -5, safety: 5 },
        feedback: { zh: '重建的人脉关系让你在职场上多了很多有力的支持者！', en: 'Rebuilt relationships gave you many more powerful supporters in your career!' },
      },
      {
        id: 'selective_reconnect',
        text: { zh: '有选择地维护最重要的几段关系', en: 'Selectively maintain only the most important relationships' },
        effects: { network: 10, finance: -2 },
        feedback: { zh: '你维护了核心关系，效率更高，但覆盖面有限。', en: 'You maintained core relationships efficiently, though with limited coverage.' },
      },
      {
        id: 'focus_on_work',
        text: { zh: '继续专注工作，人脉自然会来', en: 'Keep focusing on work and let network come naturally' },
        effects: { skill: 10, safety: 5, network: -5 },
        feedback: { zh: '你的工作成果吸引了一些联系，但主动经营仍然更为有效。', en: 'Your results attracted some connections, but active networking remains more effective.' },
      },
    ],
  },
  {
    id: 'personal_values_conflict',
    type: 'life',
    title: { zh: '公司决策与个人价值观冲突', en: 'Company Decision Conflicts with Personal Values' },
    description: { zh: '公司做出了一个你认为在道德上有问题的决策，你面临沉默还是发声的选择。', en: 'The company makes a decision you consider ethically questionable. You face a choice: stay silent or speak up.' },
    options: [
      {
        id: 'speak_up',
        text: { zh: '内部反映，坚持原则', en: 'Speak up internally and stand on principle' },
        effects: { safety: -10, network: 10, skill: 5 },
        feedback: { zh: '你的发声赢得了一些同事的尊重，但也引起了管理层的警惕。', en: 'Your voice earned respect from some colleagues but drew management\'s scrutiny.' },
      },
      {
        id: 'stay_silent',
        text: { zh: '隐忍沉默，保住饭碗', en: 'Stay silent to protect your position' },
        effects: { safety: 5, finance: 5, skill: -5 },
        feedback: { zh: '你保住了岗位，但内心的不适感在慢慢积累。', en: 'You kept your job, but internal discomfort slowly accumulated.' },
      },
      {
        id: 'find_new_job',
        text: { zh: '悄悄开始找新工作', en: 'Quietly start looking for a new job' },
        effects: { safety: -10, network: 10, finance: 5 },
        feedback: { zh: '你找到了价值观更契合的公司，完成了一次高质量的跳槽！', en: 'You found a company more aligned with your values and made a quality career move!' },
      },
    ],
    minYear: 2,
  },
  {
    id: 'unexpected_windfall',
    type: 'life',
    title: { zh: '意外之财', en: 'Unexpected Windfall' },
    description: { zh: '你意外获得了一笔钱（遗产、理赔或意外收益），需要决定如何支配。', en: 'You unexpectedly receive a sum of money (inheritance, settlement, or windfall). You need to decide how to use it.' },
    options: [
      {
        id: 'invest_in_self',
        text: { zh: '投资自身，报名高端课程或培训', en: 'Invest in yourself with premium courses or training' },
        effects: { skill: 20, network: 10, finance: -5 },
        feedback: { zh: '这笔投资的回报远超预期，你的能力大幅提升！', en: 'The return on this investment far exceeded expectations — your capabilities grew significantly!' },
      },
      {
        id: 'save_emergency_fund',
        text: { zh: '存入紧急备用金，增加安全感', en: 'Save it as emergency fund for security' },
        effects: { finance: 20, safety: 10 },
        feedback: { zh: '充足的备用金让你在面对未来风险时底气十足。', en: 'A solid emergency fund gave you confidence facing future risks.' },
      },
      {
        id: 'invest_market',
        text: { zh: '投入市场，寻求更高回报', en: 'Invest in markets for higher returns' },
        effects: { finance: 15, safety: -10 },
        feedback: { zh: '市场表现不错，但波动让你体验了一把心跳的感觉。', en: 'Markets performed well, but the volatility was a heart-pumping experience.' },
      },
    ],
  },
  {
    id: 'hobby_monetization',
    type: 'life',
    title: { zh: '兴趣爱好能否变现', en: 'Can Your Hobby Become Income?' },
    description: { zh: '你一直有一个热爱的兴趣爱好，最近开始有人愿意为此付费，你开始考虑是否要将其商业化。', en: 'You\'ve always had a passion hobby and recently people are willing to pay for it. You\'re considering whether to commercialize it.' },
    options: [
      {
        id: 'commercialize_hobby',
        text: { zh: '商业化，将爱好变为副业', en: 'Commercialize — turn the hobby into a side income' },
        effects: { finance: 15, network: 10, safety: -5 },
        feedback: { zh: '爱好副业运转良好，带来了额外收入，但有时压力也随之而来。', en: 'The side business ran well and brought extra income, though pressure came with it.' },
      },
      {
        id: 'keep_hobby_pure',
        text: { zh: '保持纯粹，不让兴趣变负担', en: 'Keep it pure — don\'t let passion become a burden' },
        effects: { safety: 5, skill: 5, network: 5 },
        feedback: { zh: '你的爱好为你提供了持续的精神支撑，成为了抵御压力的避风港。', en: 'Your hobby became a constant source of recharge, a shelter against daily stress.' },
      },
      {
        id: 'build_community',
        text: { zh: '以爱好为核心建立社群', en: 'Build a community around your hobby' },
        effects: { network: 20, finance: 5, skill: 5, safety: -5 },
        feedback: { zh: '社群成为你最宝贵的人脉资产，跨界合作机遇不断涌现！', en: 'The community became your most valuable network asset, with cross-sector collaboration opportunities emerging!' },
      },
    ],
    minYear: 3,
  },
];

// ─────────────────────────────────────────────
// COMBINED EXPORT
// ─────────────────────────────────────────────
export const allEvents: GameEvent[] = [
  ...opportunityEvents,
  ...crisisEvents,
  ...lifeEvents,
];
