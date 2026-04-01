import type { SwipeCard } from '../engine/types';

// ============================================================
// Stage 1: Early Career (Years 1-10) — Effects ±5-10
// 15 generic + career-specific cards
// Characters: mostly boss, senior, colleague
// ============================================================

const stage1Generic: SwipeCard[] = [
  {
    id: 's1_boss_ai_tool_trial',
    character: 'boss',
    text: { zh: '"公司决定试用 AI 工具，你来负责？"', en: '"Company wants to trial AI tools. You lead it?"' },
    leftChoice: {
      label: { zh: '婉拒', en: 'Decline' },
      effects: { stability: 5, skill: -5, sanity: 3 },
      outcomes: [
        { id: 's1_boss_ai_decline_good', text: { zh: '你专注本职工作，被评为季度之星。', en: 'You focused on core work and became Employee of the Quarter.' }, effects: { stability: 8, skill: 4, sanity: 6 }, weight: 35 },
        { id: 's1_boss_ai_decline_mid', text: { zh: '老板有点失望，但也没说什么。', en: 'Boss was a bit disappointed but said nothing.' }, effects: { stability: 5, skill: -5, sanity: -3 }, weight: 40 },
        { id: 's1_boss_ai_decline_bad', text: { zh: '另一个同事接手后大放异彩，你被边缘化了。', en: 'Another colleague took over and shone. You got sidelined.' }, effects: { stability: -5, skill: -8, network: -5, sanity: -5 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { skill: 6, stability: -5, sanity: -3 },
      outcomes: [
        { id: 's1_boss_ai_accept_good', text: { zh: 'AI 工具部署成功！做了全公司培训，老板赏识！', en: 'AI tool deployed successfully! Company-wide training, boss is impressed!' }, effects: { skill: 7, network: 5, sanity: 7 }, weight: 40, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_boss_ai_accept_mid', text: { zh: '工具还行，学到了一些基础知识。', en: 'Tool was okay. Learned some basics.' }, effects: { skill: 6, sanity: 3 }, weight: 35 },
        { id: 's1_boss_ai_accept_bad', text: { zh: '项目搞砸了，加班善后，被老板训了一顿。', en: 'Project failed. Overtime cleanup. Boss was furious.' }, effects: { stability: -10, sanity: -7 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'office'
  },
  {
    id: 's1_senior_work_overtime',
    character: 'senior',
    text: { zh: '"新人就该多加班，趁年轻多学点。"', en: '"Newbies should work overtime. Learn while young."' },
    leftChoice: {
      label: { zh: '准时下班', en: 'Leave on time' },
      effects: { stability: -5, network: -5, sanity: 5 },
      outcomes: [
        { id: 's1_overtime_leave_good', text: { zh: '下班后去健身房锻炼，精力充沛效率反而更高了。', en: 'Hit the gym after work. More energy, better efficiency.' }, effects: { stability: 5, skill: 4, sanity: 7 }, weight: 35 },
        { id: 's1_overtime_leave_mid', text: { zh: '前辈觉得你不够积极，但也没为难你。', en: 'Senior thinks you lack drive, but doesn\'t make a fuss.' }, effects: { stability: -5, network: -5, sanity: 3 }, weight: 40 },
        { id: 's1_overtime_leave_bad', text: { zh: '你走后同事在背后议论，关系变差了。', en: 'Colleagues gossiped after you left. Relationships soured.' }, effects: { network: -10, stability: -5, sanity: -5 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '留下来', en: 'Stay late' },
      effects: { skill: 6, stability: -5, sanity: -4 },
      outcomes: [
        { id: 's1_overtime_stay_good', text: { zh: '加班中前辈教了你很多实战经验，收获满满！', en: 'Senior taught you tons of practical skills during overtime!' }, effects: { skill: 7, network: 5, sanity: 4 }, weight: 40 },
        { id: 's1_overtime_stay_mid', text: { zh: '多学了些东西，但也挺累的。', en: 'Learned a bit, but exhausting.' }, effects: { skill: 6, stability: -5, sanity: -4 }, weight: 35 },
        { id: 's1_overtime_stay_bad', text: { zh: '加班太多身体吃不消，第二天请了病假。', en: 'Too much overtime. Called in sick the next day.' }, effects: { stability: -12, sanity: -8 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'universal'
  },
  {
    id: 's1_hr_training_program',
    character: 'hr',
    text: { zh: '"有一个 AI 培训课程，名额有限，要报名吗？"', en: '"Limited spots for an AI training program. Sign up?"' },
    leftChoice: {
      label: { zh: '算了', en: 'Pass' },
      effects: { stability: 5, sanity: 3 },
      outcomes: [
        { id: 's1_training_pass_good', text: { zh: '省下时间做了自己的项目，反而学到了更多。', en: 'Used the saved time on your own project and learned more.' }, effects: { stability: 5, skill: 4, sanity: 4 }, weight: 35 },
        { id: 's1_training_pass_mid', text: { zh: '没什么变化，日子照旧。', en: 'Nothing changed. Life goes on.' }, effects: { stability: 5, sanity: 3 }, weight: 40 },
        { id: 's1_training_pass_bad', text: { zh: '参加培训的同事升职了，你后悔没报名。', en: 'Colleague who attended got promoted. You regret skipping.' }, effects: { stability: -5, skill: -5, sanity: -5 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '报名', en: 'Sign up' },
      effects: { skill: 6, finance: -5, sanity: 3 },
      outcomes: [
        { id: 's1_training_join_good', text: { zh: '课程收获巨大！学会了用 AI 做高级 PPT，被老板赏识！', en: 'Course was amazing! Learned AI-powered presentations, boss is impressed!' }, effects: { skill: 7, network: 5, finance: -5, sanity: 5 }, weight: 40, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's1_training_join_mid', text: { zh: '培训内容还行，学到了一些基础。', en: 'Training was okay. Picked up the basics.' }, effects: { skill: 7, finance: -5, sanity: 3 }, weight: 35 },
        { id: 's1_training_join_bad', text: { zh: '培训是个坑，内容粗糙，钱白花了。', en: 'Training was a scam. Shallow content. Money wasted.' }, effects: { skill: 2, finance: -10, sanity: -5 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'universal'
  },
  {
    id: 's1_colleague_side_hustle',
    character: 'colleague',
    text: { zh: '"我在搞副业，一起来？赚点外快。"', en: '"I have a side gig. Want in? Good extra cash."' },
    leftChoice: {
      label: { zh: '不参与', en: 'No thanks' },
      effects: { stability: 5, sanity: 3 },
      outcomes: [
        { id: 's1_side_no_good', text: { zh: '同事副业被公司发现，差点被开除。还好你没参与！', en: '同事副业被公司发现，差点被开除。还好你没参与！' }, effects: { stability: 10, sanity: 6 }, weight: 35 },
        { id: 's1_side_no_mid', text: { zh: '安心上班，平平淡淡。', en: '安心上班，平平淡淡。' }, effects: { stability: 5, sanity: 3 }, weight: 40 },
        { id: 's1_side_no_bad', text: { zh: '同事副业赚翻了，请全组吃饭，就你没份……', en: '同事副业赚翻了，请全组吃饭，就你没份……' }, effects: { finance: -5, sanity: -4 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '参与', en: 'Join in' },
      effects: { finance: 8, stability: -8, sanity: -3 },
      outcomes: [
        { id: 's1_side_yes_good', text: { zh: '副业大赚！第一桶金到手，请同事吃了一顿大餐。', en: '副业大赚！第一桶金到手，请同事吃了一顿大餐。' }, effects: { finance: 12, network: 5, sanity: 5 }, weight: 35 },
        { id: 's1_side_yes_mid', text: { zh: '赚了点零花钱，不多但聊胜于无。', en: '赚了点零花钱，不多但聊胜于无。' }, effects: { finance: 8, stability: -8, sanity: 3 }, weight: 40 },
        { id: 's1_side_yes_bad', text: { zh: '副业亏钱了，还被主管发现上班时间摸鱼……', en: '副业亏钱了，还被主管发现上班时间摸鱼……' }, effects: { finance: -8, stability: -12, sanity: -7 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'universal'
  },
  {
    id: 's1_senior_mentor_advice',
    character: 'senior',
    text: { zh: '"别只顾着技术，多认识人才是正道。"', en: '"Don\'t just focus on tech. Networking is key."' },
    leftChoice: {
      label: { zh: '继续钻研', en: 'Keep studying' },
      effects: { skill: 6, network: -5, sanity: -3 },
      outcomes: [
        { id: 's1_mentor_study_good', text: { zh: '闷头钻研三个月，发表了技术博客，被大佬转发！', en: '闷头钻研三个月，发表了技术博客，被大佬转发！' }, effects: { skill: 7, network: 3, sanity: 7 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_mentor_study_mid', text: { zh: '技术进步了，但社交圈确实小了点。', en: '技术进步了，但社交圈确实小了点。' }, effects: { skill: 6, network: -5, sanity: -3 }, weight: 40 },
        { id: 's1_mentor_study_bad', text: { zh: '闭门造车，方向搞偏了，白费功夫。', en: '闭门造车，方向搞偏了，白费功夫。' }, effects: { skill: -5, network: -8, sanity: -6 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '听建议', en: 'Take advice' },
      effects: { network: 8, skill: -5, sanity: 4 },
      outcomes: [
        { id: 's1_mentor_network_good', text: { zh: '参加行业聚会，认识了未来的创业伙伴！', en: '参加行业聚会，认识了未来的创业伙伴！' }, effects: { network: 12, finance: 3, sanity: 5 }, weight: 40 },
        { id: 's1_mentor_network_mid', text: { zh: '多认识了几个人，技术落下了一点。', en: '多认识了几个人，技术落下了一点。' }, effects: { network: 8, skill: -5, sanity: 3 }, weight: 35 },
        { id: 's1_mentor_network_bad', text: { zh: '社交场合遇到骗子，被忽悠买了理财产品。', en: '社交场合遇到骗子，被忽悠买了理财产品。' }, effects: { network: 5, finance: -10, sanity: -5 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'universal'
  },
  {
    id: 's1_boss_performance_review',
    character: 'boss',
    text: { zh: '"年度评估，你想争取升职还是稳一下？"', en: '"Annual review. Push for promotion or play it safe?"' },
    leftChoice: {
      label: { zh: '稳着来', en: 'Play safe' },
      effects: { stability: 8, sanity: 3 },
      outcomes: [
        { id: 's1_review_safe_good', text: { zh: '稳扎稳打获得了"最佳可靠员工"奖。', en: '稳扎稳打获得了"最佳可靠员工"奖。' }, effects: { stability: 10, network: 3, sanity: 5 }, weight: 35 },
        { id: 's1_review_safe_mid', text: { zh: '不功不过，继续原地踏步。', en: '不功不过，继续原地踏步。' }, effects: { stability: 8, sanity: 3 }, weight: 40 },
        { id: 's1_review_safe_bad', text: { zh: '太低调了，年终奖拿了最低档。', en: '太低调了，年终奖拿了最低档。' }, effects: { stability: 5, finance: -8, sanity: -4 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '争取', en: 'Push for it' },
      effects: { finance: 8, stability: -8, network: 5, sanity: -4 },
      outcomes: [
        { id: 's1_review_push_good', text: { zh: '绩效答辩惊艳全场，直接升了一级！加薪30%！', en: '绩效答辩惊艳全场，直接升了一级！加薪30%！' }, effects: { finance: 12, network: 8, sanity: 8 }, weight: 35 },
        { id: 's1_review_push_mid', text: { zh: '争取了但没升，老板说明年再看。', en: '争取了但没升，老板说明年再看。' }, effects: { finance: 8, stability: -8, network: 5, sanity: -4 }, weight: 40 },
        { id: 's1_review_push_bad', text: { zh: '表现太急切被老板打上了"浮躁"标签。', en: '表现太急切被老板打上了"浮躁"标签。' }, effects: { stability: -10, network: -5, sanity: -6 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'office'
  },
  {
    id: 's1_headhunter_first_call',
    character: 'headhunter',
    text: { zh: '"你好，有个机会想跟你聊聊。"', en: '"Hi, I have an opportunity to discuss with you."' },
    leftChoice: {
      label: { zh: '不感兴趣', en: 'Not interested' },
      effects: { stability: 5, sanity: 3 },
      outcomes: [
        { id: 's1_hunter_no_good', text: { zh: '专心本职，年底拿到了超预期的年终奖。', en: '专心本职，年底拿到了超预期的年终奖。' }, effects: { stability: 5, finance: 5, sanity: 4 }, weight: 35 },
        { id: 's1_hunter_no_mid', text: { zh: '挂了电话，该干嘛干嘛。', en: '挂了电话，该干嘛干嘛。' }, effects: { stability: 5, sanity: 3 }, weight: 40 },
        { id: 's1_hunter_no_bad', text: { zh: '后来听说那是个年薪翻倍的好机会……', en: '后来听说那是个年薪翻倍的好机会……' }, effects: { finance: -5, sanity: -5 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '聊聊', en: 'Let\'s talk' },
      effects: { network: 8, stability: -5, sanity: 3 },
      outcomes: [
        { id: 's1_hunter_yes_good', text: { zh: '虽然没跳槽，但猎头帮你了解了市场行情，谈薪有了底气。', en: '虽然没跳槽，但猎头帮你了解了市场行情，谈薪有了底气。' }, effects: { network: 10, finance: 5, sanity: 5 }, weight: 40 },
        { id: 's1_hunter_yes_mid', text: { zh: '了解了外部机会，但暂时没动。', en: '了解了外部机会，但暂时没动。' }, effects: { network: 8, stability: -5, sanity: 3 }, weight: 35 },
        { id: 's1_hunter_yes_bad', text: { zh: '跟猎头聊的事被公司知道了，被领导叫去谈话了……', en: '跟猎头聊的事被公司知道了，被领导叫去谈话了……' }, effects: { stability: -12, network: -5, sanity: -7 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'universal'
  },
  {
    id: 's1_boss_present_to_client',
    character: 'boss',
    text: { zh: '"下周给客户做演示，你来讲？"', en: '"Client demo next week. You present?"' },
    leftChoice: {
      label: { zh: '推给别人', en: 'Defer' },
      effects: { stability: 5, network: -5, sanity: 3 },
      outcomes: [
        { id: 's1_present_defer_good', text: { zh: '让更擅长的同事去了，他讲得很好，你也有时间完成手头工作。', en: '让更擅长的同事去了，他讲得很好，你也有时间完成手头工作。' }, effects: { stability: 8, sanity: 4 }, weight: 35 },
        { id: 's1_present_defer_mid', text: { zh: '老板没说什么，但似乎有点失望。', en: '老板没说什么，但似乎有点失望。' }, effects: { stability: 5, network: -5, sanity: -3 }, weight: 40 },
        { id: 's1_present_defer_bad', text: { zh: '去讲的同事搞砸了，老板怪你不担当。', en: '去讲的同事搞砸了，老板怪你不担当。' }, effects: { network: -10, stability: -5, sanity: -5 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '我来', en: 'I\'ll do it' },
      effects: { network: 10, skill: 4, stability: -5, sanity: -4 },
      outcomes: [
        { id: 's1_present_go_good', text: { zh: '演示超级成功！客户当场签了合同，你成了部门英雄！', en: '演示超级成功！客户当场签了合同，你成了部门英雄！' }, effects: { network: 15, skill: 6, finance: 5, sanity: 8 }, weight: 35  },
        { id: 's1_present_go_mid', text: { zh: '讲得中规中矩，客户说再考虑考虑。', en: '讲得中规中矩，客户说再考虑考虑。' }, effects: { network: 10, skill: 4, stability: -5, sanity: -3 }, weight: 40 },
        { id: 's1_present_go_bad', text: { zh: '现场紧张忘词，客户全程玩手机……老板脸色铁青。', en: '现场紧张忘词，客户全程玩手机……老板脸色铁青。' }, effects: { stability: -10, network: -5, sanity: -7 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'office'
  },
  // Career-specific: programmer
  {
    id: 's1_boss_code_review_ai',
    character: 'boss',
    text: { zh: '"用 AI 做 Code Review，能提效不？"', en: '"Use AI for code review. Can it improve efficiency?"' },
    leftChoice: {
      label: { zh: '人工更靠谱', en: 'Manual is safer' },
      effects: { stability: 8, sanity: 3 },
      outcomes: [
        { id: 's1_codereview_manual_good', text: { zh: '手动 Code Review 发现了一个严重 bug，救了整个项目！', en: 'Manual code review caught a critical bug. Saved the whole project!' }, effects: { stability: 12, skill: 6, sanity: 7 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_codereview_manual_mid', text: { zh: '审查效率一般，但代码质量有保障。', en: 'Review pace was average, but code quality was solid.' }, effects: { stability: 8, sanity: 3 }, weight: 40 },
        { id: 's1_codereview_manual_bad', text: { zh: '团队效率比不上隔壁用 AI 的组，被点名批评。', en: 'Team fell behind the AI-using group. Got called out.' }, effects: { stability: -5, network: -5, sanity: -5 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '试试', en: 'Let\'s try' },
      effects: { skill: 6, stability: -8, sanity: -3 },
      outcomes: [
        { id: 's1_codereview_ai_good', text: { zh: 'AI Review 效率爆表，你被提拔为技术委员会成员！', en: 'AI review was incredibly efficient. You got promoted to the tech committee!' }, effects: { skill: 7, network: 8, sanity: 7 }, weight: 40, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_codereview_ai_mid', text: { zh: 'AI 审查还不错，减少了些重复工作。', en: 'AI review was decent. Reduced some repetitive work.' }, effects: { skill: 7, stability: -8, sanity: 3 }, weight: 35 },
        { id: 's1_codereview_ai_bad', text: { zh: 'AI 漏掉了关键问题，线上出了 bug，得加班修复。', en: 'AI missed a critical issue. Production bug. Overtime to fix.' }, effects: { stability: -15, sanity: -7 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'office',
    careerIds: ['programmer']
  },  // School scene: general (no careerIds)
  {
    id: 's1_hr_parent_conference',
    character: 'hr',
    text: { zh: '家长群里炸锅了——小明妈妈要求面谈，说孩子成绩下滑都怪老师。你怎么办？', en: 'The parent chat exploded — a mom demands a meeting, blaming you for her kid\'s dropping grades. What do you do?' },
    leftChoice: {
      label: { zh: '推脱', en: 'Postpone' },
      effects: { stability: -5, sanity: -3 },
      outcomes: [
        { id: 's1_parent_conf_left_good', text: { zh: '家长自己冷静下来了，事情不了了之。', en: 'The parent calmed down on their own. It blew over.' }, effects: { stability: 5, sanity: 5 }, weight: 35 },
        { id: 's1_parent_conf_left_mid', text: { zh: '推了几天，家长直接找校长投诉了。', en: 'You delayed a few days. The parent went straight to the principal.' }, effects: { stability: -5, sanity: -4 }, weight: 40 },
        { id: 's1_parent_conf_left_bad', text: { zh: '家长在朋友圈公开吐槽你，其他家长跟风质疑。', en: 'The parent publicly roasted you online. Other parents piled on.' }, effects: { stability: -10, network: -5, sanity: -7 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '认真接待', en: 'Meet them' },
      effects: { network: 8, stability: -3, sanity: -3 },
      outcomes: [
        { id: 's1_parent_conf_right_good', text: { zh: '你耐心分析了成绩下滑原因，家长感动得给你送了面锦旗。', en: 'You patiently explained the situation. The parent was so moved they sent a thank-you banner.' }, effects: { network: 10, stability: 5, sanity: 7 }, weight: 35 },
        { id: 's1_parent_conf_right_mid', text: { zh: '面谈还算顺利，家长表示愿意配合改进。', en: 'The meeting went okay. The parent agreed to cooperate on improvements.' }, effects: { network: 8, sanity: 3 }, weight: 40 },
        { id: 's1_parent_conf_right_bad', text: { zh: '你认真准备了资料，但家长全程甩锅，白忙一场。', en: 'You prepared materials carefully, but the parent blamed everyone else. Wasted effort.' }, effects: { network: -3, stability: -5, sanity: -6 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'school'
  },
  {
    id: 's1_boss_substitute_class',
    character: 'boss',
    text: { zh: '"数学组的张老师请病假了，今天你能帮忙代一节高三的课吗？"', en: '"The math teacher called in sick. Can you cover a senior-year class today?"' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Decline' },
      effects: { network: -5, sanity: 3 },
      outcomes: [
        { id: 's1_substitute_left_good', text: { zh: '校长找到了别人代课，没人怪你。', en: 'The principal found someone else. No one blamed you.' }, effects: { stability: 5, sanity: 4 }, weight: 35 },
        { id: 's1_substitute_left_mid', text: { zh: '同事们有点不满，觉得你不够团队精神。', en: 'Colleagues were a bit annoyed. They think you lack team spirit.' }, effects: { network: -5, sanity: -3 }, weight: 40 },
        { id: 's1_substitute_left_bad', text: { zh: '校长记住了这件事，年终考核被扣了印象分。', en: 'The principal remembered this. It cost you points in the annual review.' }, effects: { network: -8, stability: -5, sanity: -5 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '帮忙', en: 'Cover it' },
      effects: { network: 8, stability: -5, sanity: -3 },
      outcomes: [
        { id: 's1_substitute_right_good', text: { zh: '你的代课风格深受学生喜欢，学生们都说你比原来的老师有趣！', en: 'Students loved your style! They said you were way more fun than the regular teacher!' }, effects: { network: 10, skill: 4, sanity: 6 }, weight: 35 },
        { id: 's1_substitute_right_mid', text: { zh: '顺利完成了代课，同事感谢你的帮忙。', en: 'Class went fine. The colleague thanked you for helping out.' }, effects: { network: 8, sanity: 4 }, weight: 40 },
        { id: 's1_substitute_right_bad', text: { zh: '代课内容不熟，被学生问倒了，有点尴尬。', en: 'You weren\'t familiar with the material. Students stumped you. Awkward.' }, effects: { skill: -5, stability: -5, sanity: -6 }, weight: 25 },
      ]
    },
    stage: 1,
    scene: 'school'
  },
  {
    id: 's1_event_company_collapse',
    character: 'hr',
    text: { zh: '"紧急通知：公司最大客户刚刚破产了，一半项目全部取消。"', en: '"Breaking news: our biggest client just went bankrupt. Half the projects are canceled."' },
    leftChoice: {
      label: { zh: '更新简历', en: 'Update resume' },
      effects: { stability: -10, network: 10, sanity: -8 },
      outcomes: [
        { id: 's1_event_company_collapse_left_good', text: { zh: '准备充分，很快拿到了新offer！', en: 'Prepared well, quickly got a new offer!' }, effects: { network: 20, finance: 10, sanity: 5 }, weight: 30 },
        { id: 's1_event_company_collapse_left_mid', text: { zh: '投出了几份简历，还在等回复，有点焦虑。', en: 'Sent out resumes, waiting for responses. Anxious.' }, effects: { stability: -10, network: 10, sanity: -10 }, weight: 40 },
        { id: 's1_event_company_collapse_left_bad', text: { zh: '发现整个行业都在裁员，无处可去。', en: 'Realized the entire industry is laying off. Nowhere to go.' }, effects: { stability: -20, sanity: -20, network: -10 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '团结团队', en: 'Rally the team' },
      effects: { network: 15, stability: -10, sanity: 5 },
      outcomes: [
        { id: 's1_event_company_collapse_right_good', text: { zh: '你带领团队拿下了新客户，老板把你升了一级！', en: 'You led the team to land a new client. Boss promoted you!' }, effects: { network: 25, skill: 7, finance: 10, sanity: 15 }, weight: 30 },
        { id: 's1_event_company_collapse_right_mid', text: { zh: '大家暂时稳住了，但人心惶惶。', en: 'Team stabilized for now, but everyone\'s on edge.' }, effects: { network: 10, stability: -15, sanity: -5 }, weight: 40 },
        { id: 's1_event_company_collapse_right_bad', text: { zh: '团队里3个核心成员趁乱跳槽了，你被留下收拾烂摊子。', en: '3 key team members jumped ship in the chaos. You\'re left cleaning up.' }, effects: { network: -20, stability: -15, sanity: -15 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 1,
    scene: 'office'
  },
  {
    id: 's1_event_ai_romance',
    character: 'ai',
    text: { zh: '"你在网上认识了一个聊得特别投契的人。三个月后，你发现……TA 可能是个 AI。"', en: '"You met someone online who really gets you. Three months later, you discover... they might be an AI."' },
    leftChoice: {
      label: { zh: '立刻断联', en: 'Cut contact' },
      effects: { sanity: 10, network: -15 },
      outcomes: [
        { id: 's1_event_ai_romance_left_good', text: { zh: '断了之后反而更专注工作，还认识了真实的朋友。', en: 'After cutting ties, you focused on work and made real friends.' }, effects: { sanity: 15, network: 10, skill: 4 }, weight: 30 },
        { id: 's1_event_ai_romance_left_mid', text: { zh: '有点失落，但觉得这是对的选择。', en: 'A bit sad, but it felt like the right call.' }, effects: { sanity: 5, network: -10 }, weight: 40 },
        { id: 's1_event_ai_romance_left_bad', text: { zh: '断联后总是回想那些对话，工作都心不在焉。', en: 'Kept replaying those conversations. Couldn\'t focus on work.' }, effects: { sanity: -15, skill: -10 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '继续聊', en: 'Keep talking' },
      effects: { sanity: -10, skill: 7, network: -5 },
      outcomes: [
        { id: 's1_event_ai_romance_right_good', text: { zh: '这个 AI "朋友"竟然帮你理清了职业方向，让你做了最好的决定。', en: 'Your AI "friend" helped you figure out your career path. Best decision ever.' }, effects: { skill: 14, sanity: 5, finance: 10 }, weight: 30 },
        { id: 's1_event_ai_romance_right_mid', text: { zh: '聊天确实让你开心，但你开始分不清虚拟和现实了。', en: 'The chats made you happy, but you started blurring virtual and reality.' }, effects: { sanity: -15, skill: 7 }, weight: 40 },
        { id: 's1_event_ai_romance_right_bad', text: { zh: '被同事发现你在和 AI 谈恋爱，成了办公室笑话。', en: 'Colleagues found out you\'re dating an AI. Became the office joke.' }, effects: { network: -25, sanity: -20 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 1,
    scene: 'universal'
  },
  {
    id: 's1_event_viral_post',
    character: 'colleague',
    text: { zh: '"同事偷拍了你在工位上的搞笑瞬间，发到网上竟然有 200 万播放量。好几个公司在私信你。"', en: '"A colleague secretly filmed your funny moment at work. It went viral — 2 million views. Companies are DMing you."' },
    leftChoice: {
      label: { zh: '要求删除', en: 'Demand takedown' },
      effects: { stability: 10, network: -15, sanity: -5 },
      outcomes: [
        { id: 's1_event_viral_post_left_good', text: { zh: '视频删了，你的强硬态度反而让同事更尊重你。', en: 'Video was removed. Your firm stance actually earned more respect.' }, effects: { stability: 15, network: 5, sanity: 10 }, weight: 30 },
        { id: 's1_event_viral_post_left_mid', text: { zh: '删了但网上还有转载，热度慢慢消退了。', en: 'Taken down but reposts linger. Hype faded gradually.' }, effects: { stability: 5, sanity: -10 }, weight: 40 },
        { id: 's1_event_viral_post_left_bad', text: { zh: '你越维权热度越高，"戏精"的标签甩不掉了。', en: 'The more you fought it, the more viral it got. "Drama queen" label stuck.' }, effects: { network: -20, sanity: -20, stability: -10 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '顺势而为', en: 'Lean into the fame' },
      effects: { network: 20, stability: -15, sanity: -5 },
      outcomes: [
        { id: 's1_event_viral_post_right_good', text: { zh: '一个大品牌找你做代言，一夜之间财务自由了！', en: 'A major brand offered you a deal. Financial freedom overnight!' }, effects: { finance: 25, network: 25, sanity: 10 }, weight: 30 },
        { id: 's1_event_viral_post_right_mid', text: { zh: '涨了一波粉，但热度很快过去了，回到日常。', en: 'Gained followers, but the hype faded quickly. Back to normal.' }, effects: { network: 15, sanity: -5 }, weight: 40 },
        { id: 's1_event_viral_post_right_bad', text: { zh: '趁热度接了一堆烂广告，口碑崩了，正经工作也受影响。', en: 'Took sketchy sponsorships during the hype. Reputation tanked. Work suffered too.' }, effects: { network: -15, finance: -10, stability: -15, sanity: -15 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 1,
    scene: 'universal'
  },
  {
    id: 's1_event_ai_matchmaker',
    character: 'ai',
    text: { zh: '"AI 约会 App 把你匹配到了一个热门创业公司的 CEO。TA 约你喝咖啡，是谈生意还是约会？不确定。"', en: '"An AI dating app matched you with a hot startup CEO. They want coffee — business or romance? Unclear."' },
    leftChoice: {
      label: { zh: '太奇怪了', en: 'Too weird' },
      effects: { sanity: 8, stability: 5, network: -10 },
      outcomes: [
        { id: 's1_event_ai_matchmaker_left_good', text: { zh: '没去，但那个 CEO 的公司后来暴雷了，你躲过一劫！', en: 'Didn\'t go. That CEO\'s company collapsed later. Dodged a bullet!' }, effects: { stability: 20, sanity: 15 }, weight: 30 },
        { id: 's1_event_ai_matchmaker_left_mid', text: { zh: '算了，继续工作吧。', en: 'Oh well, back to work.' }, effects: { sanity: 5, network: -10 }, weight: 40 },
        { id: 's1_event_ai_matchmaker_left_bad', text: { zh: '后来听说那个 CEO 投了你竞争对手的公司，你后悔没去。', en: 'Later heard that CEO invested in your competitor. Regret.' }, effects: { sanity: -15, finance: -10 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '去赴约', en: 'Go for it' },
      effects: { network: 15, finance: 5, sanity: -5, stability: -10 },
      outcomes: [
        { id: 's1_event_ai_matchmaker_right_good', text: { zh: '不仅聊得投机，TA 还给你介绍了天使投资人！人生从此不同。', en: 'Great chemistry. They introduced you to an angel investor. Life-changing!' }, effects: { network: 25, finance: 20, sanity: 10 }, weight: 30 },
        { id: 's1_event_ai_matchmaker_right_mid', text: { zh: '是个不错的人，但也就那样，互相加了个微信。', en: 'Nice person, but nothing special. Added each other on WeChat.' }, effects: { network: 10, sanity: -5 }, weight: 40 },
        { id: 's1_event_ai_matchmaker_right_bad', text: { zh: '约会变成了一场创业推销，TA 只是想拉你当免费合伙人。', en: 'The "date" was a pitch. They just wanted you as a free co-founder.' }, effects: { sanity: -20, network: -10, finance: -10 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 1,
    scene: 'universal'
  },
  {
    id: 's1_event_scammed',
    character: 'headhunter',
    text: { zh: '"一个\'猎头\'给你介绍了一份薪资翻倍的远程工作。你按要求交了5000元\'入职保证金\'——被骗了。"', en: '"A \'recruiter\' offered you a dream remote job at double the salary. You paid the $700 \'security deposit\' — it was a scam."' },
    leftChoice: {
      label: { zh: '报警', en: 'Report to police' },
      effects: { finance: -20, sanity: -10, stability: 5 },
      outcomes: [
        { id: 's1_event_scammed_left_good', text: { zh: '警方居然抓到了骗子团伙，你不仅追回了钱还上了新闻。', en: 'Police actually caught the scam ring. Got money back AND made the news.' }, effects: { finance: 10, network: 15, sanity: 15 }, weight: 30 },
        { id: 's1_event_scammed_left_mid', text: { zh: '报了案但石沉大海，钱是回不来了。', en: 'Filed a report but nothing came of it. Money\'s gone.' }, effects: { finance: -20, sanity: -15 }, weight: 40 },
        { id: 's1_event_scammed_left_bad', text: { zh: '骗子用你的个人信息又骗了别人，你被卷入调查。', en: 'Scammers used your info to scam others. You got dragged into an investigation.' }, effects: { stability: -20, sanity: -25, finance: -15 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '自己追查', en: 'Track them down' },
      effects: { finance: -15, skill: 7, sanity: -15 },
      outcomes: [
        { id: 's1_event_scammed_right_good', text: { zh: '你顺着线索发现了一整套诈骗网络，写了篇爆文，成了反诈KOL。', en: 'You traced the whole scam network. Wrote a viral expose. Became an anti-fraud KOL.' }, effects: { network: 20, skill: 11, sanity: 10 }, weight: 30 },
        { id: 's1_event_scammed_right_mid', text: { zh: '追查了两周没什么结果，但至少学了些网络安全知识。', en: 'Two weeks of investigating, no results. At least learned about cybersecurity.' }, effects: { skill: 7, sanity: -15, finance: -15 }, weight: 40 },
        { id: 's1_event_scammed_right_bad', text: { zh: '追查过程中又点了钓鱼链接，电脑被黑了，公司数据差点泄露。', en: 'Clicked a phishing link while investigating. Computer hacked. Nearly leaked company data.' }, effects: { stability: -25, skill: -10, sanity: -25, finance: -15 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 1,
    scene: 'universal'
  },
];

// ============================================================
// Stage 2: Mid Career (Years 11-20) — Effects ±10-20
// 15 generic + career-specific cards
// Characters: more colleague, ai
// ============================================================

const stage2Generic: SwipeCard[] = [
  {
    id: 's2_hr_layoff_wave',
    character: 'hr',
    text: { zh: '"公司在优化人员，你的部门也在名单上。"', en: '"Company is downsizing. Your department is on the list."' },
    leftChoice: {
      label: { zh: '装作不知', en: 'Pretend nothing' },
      effects: { stability: -15, sanity: -8 },
      outcomes: [
        { id: 's2_layoff_ignore_good', text: { zh: '风波过去了，你的组幸运地被保留了。', en: 'Storm passed. Your team was luckily spared.' }, effects: { stability: -5, sanity: 5 }, weight: 30 },
        { id: 's2_layoff_ignore_mid', text: { zh: '裁员名单公布了，你暂时安全但心惊胆战。', en: 'Layoff list announced. You\'re safe for now but on edge.' }, effects: { stability: -15, sanity: -10 }, weight: 40 },
        { id: 's2_layoff_ignore_bad', text: { zh: '毫无准备的情况下被通知裁员，赔偿金最低档。', en: 'Notified of layoff unprepared. Got the minimum severance.' }, effects: { stability: -25, finance: -10, sanity: -15 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '主动沟通', en: 'Talk to HR' },
      effects: { stability: -5, network: 10, sanity: -5 },
      outcomes: [
        { id: 's2_layoff_talk_good', text: { zh: 'HR 被你的态度打动，推荐你去了核心部门！', en: 'HR was impressed by your attitude and transferred you to a core team!' }, effects: { stability: 5, network: 15, sanity: 10 }, weight: 35, careerWeightModifiers: { teacher: 1.3 } },
        { id: 's2_layoff_talk_mid', text: { zh: '了解到了情况，提前做好了准备。', en: 'Got the full picture. Prepared in advance.' }, effects: { stability: -5, network: 10, sanity: -5 }, weight: 40 },
        { id: 's2_layoff_talk_bad', text: { zh: '主动沟通反而被标记为"不稳定"，加速了被裁。', en: 'Proactive communication flagged you as "unstable". Accelerated your layoff.' }, effects: { stability: -15, network: -5, sanity: -12 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'office'
  },
  {
    id: 's2_ai_replace_junior',
    character: 'ai',
    text: { zh: '"AI 已经可以完成初级岗位的大部分工作了。"', en: '"AI can now handle most junior-level tasks."' },
    leftChoice: {
      label: { zh: '无视', en: 'Ignore' },
      effects: { stability: -10, sanity: -5 },
      outcomes: [
        { id: 's2_replace_junior_left_good', text: { zh: '初级岗虽被替代，但你的资历让你安然无恙。', en: 'Junior roles got replaced, but your seniority kept you safe.' }, effects: { stability: 5, sanity: 5 }, weight: 35 },
        { id: 's2_replace_junior_left_mid', text: { zh: '暂时没影响，但隐隐觉得下一波可能轮到自己。', en: 'No impact yet, but you sense the next wave might reach you.' }, effects: { stability: -10, sanity: -8 }, weight: 40 },
        { id: 's2_replace_junior_left_bad', text: { zh: '公司悄悄用 AI 替换了你负责的模块，你最后一个知道。', en: 'Company quietly replaced your module with AI. You were the last to know.' }, effects: { stability: -20, skill: -10, sanity: -12 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '升级技能', en: 'Upskill' },
      effects: { skill: 9, finance: -10, sanity: 5 },
      outcomes: [
        { id: 's2_replace_junior_right_good', text: { zh: '新技能让你成了团队里唯一能驾驭 AI 工具的人，升职了！', en: 'New skills made you the only one who could wield AI tools. Promoted!' }, effects: { skill: 11, finance: 10, sanity: 12 }, weight: 35 },
        { id: 's2_replace_junior_right_mid', text: { zh: '花了不少钱报班，学了一些但还没派上用场。', en: "Spent money on courses. Learned a bit but haven't applied it yet." }, effects: { skill: 11, finance: -10, sanity: -5 }, weight: 40 },
        { id: 's2_replace_junior_right_bad', text: { zh: '报了天价培训班，结果内容过时了，钱打了水漂。', en: 'Signed up for expensive bootcamp. Content was outdated. Money wasted.' }, effects: { skill: -5, finance: -20, sanity: -10 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'universal'
  },
  {
    id: 's2_headhunter_rival_offer',
    character: 'headhunter',
    text: { zh: '"竞争对手出了双倍薪资挖你。"', en: '"Competitor offers double your salary."' },
    leftChoice: {
      label: { zh: '留下', en: 'Stay put' },
      effects: { stability: 10, finance: -10, sanity: 5 },
      outcomes: [
        { id: 's2_rival_stay_good', text: { zh: '留下后公司给你涨了薪，还升了职。', en: 'Company gave you a raise and promotion for staying.' }, effects: { stability: 10, finance: 10, network: 5, sanity: 8 }, weight: 30 },
        { id: 's2_rival_stay_mid', text: { zh: '留在舒适区，一切照旧。', en: 'Stayed in comfort zone. Business as usual.' }, effects: { stability: 10, finance: -10, sanity: -5 }, weight: 45 },
        { id: 's2_rival_stay_bad', text: { zh: '公司半年后大裁员，留下来的人也没能幸免。', en: 'Company had mass layoffs six months later. Staying didn\'t help.' }, effects: { stability: -10, finance: -15, sanity: -12 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '跳槽', en: 'Switch jobs' },
      effects: { finance: 20, stability: -15, network: -10, sanity: -5 },
      outcomes: [
        { id: 's2_rival_switch_good', text: { zh: '新公司发展迅猛，你成了核心团队成员！', en: 'New company is booming. You became a core team member!' }, effects: { finance: 25, skill: 8, stability: -5, sanity: 10 }, weight: 35 },
        { id: 's2_rival_switch_mid', text: { zh: '薪资翻倍，但适应新环境花了些时间。', en: 'Salary doubled, but adjusting to the new environment took time.' }, effects: { finance: 20, stability: -15, network: -10, sanity: -8 }, weight: 40 },
        { id: 's2_rival_switch_bad', text: { zh: '新公司不靠谱，三个月后又倒闭了……', en: 'New company was unreliable. Shut down three months later...' }, effects: { finance: -10, stability: -20, network: -15, sanity: -15 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'universal'
  },
  {
    id: 's2_boss_lead_ai_project',
    character: 'boss',
    text: { zh: '"AI 转型项目需要负责人，你来？"', en: '"AI transformation project needs a lead. You?"' },
    leftChoice: {
      label: { zh: '太冒险', en: 'Too risky' },
      effects: { stability: 10, skill: -10, sanity: 3 },
      outcomes: [
        { id: 's2_lead_ai_left_good', text: { zh: '别人接了项目后搞砸了，老板后悔没听你的保守建议。', en: 'Someone else took the project and botched it. Boss regretted not heeding your caution.' }, effects: { stability: 15, network: 5, sanity: 8 }, weight: 35 },
        { id: 's2_lead_ai_left_mid', text: { zh: '项目交给了别人，你继续做手头的事，波澜不惊。', en: 'Project went to someone else. You kept doing your thing. Uneventful.' }, effects: { stability: 10, skill: -10, sanity: -5 }, weight: 40 },
        { id: 's2_lead_ai_left_bad', text: { zh: '接手的同事借此升了职，老板觉得你缺乏魄力。', en: 'The colleague who took it got promoted. Boss thinks you lack initiative.' }, effects: { stability: -5, network: -10, sanity: -8 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '接手', en: 'Take charge' },
      effects: { skill: 9, network: 10, stability: -15, sanity: -5 },
      outcomes: [
        { id: 's2_lead_ai_right_good', text: { zh: '项目大获成功，你成了公司 AI 转型的功臣！', en: "Project was a huge success. You became the hero of the company's AI transformation!" }, effects: { skill: 11, network: 15, finance: 10, sanity: 12 }, weight: 35 },
        { id: 's2_lead_ai_right_mid', text: { zh: '项目磕磕绊绊推进中，虽然累但学到不少。', en: 'Project is bumpy but progressing. Exhausting, but you learned a lot.' }, effects: { skill: 11, network: 10, stability: -15, sanity: -8 }, weight: 40 },
        { id: 's2_lead_ai_right_bad', text: { zh: '项目严重超预算，老板把锅甩给你，你成了全公司的靶子。', en: 'Project went way over budget. Boss blamed you. You became the company scapegoat.' }, effects: { stability: -20, network: -15, sanity: -15 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'office'
  },
  {
    id: 's2_colleague_startup_idea',
    character: 'colleague',
    text: { zh: '"我要出去创业做 AI 产品，一起？"', en: '"I\'m starting an AI startup. Join me?"' },
    leftChoice: {
      label: { zh: '不去', en: 'No way' },
      effects: { stability: 10, sanity: 3 },
      outcomes: [
        { id: 's2_startup_no_good', text: { zh: '同事创业失败了，你庆幸没跟着去。', en: 'Colleague\'s startup failed. You\'re glad you didn\'t join.' }, effects: { stability: 15, sanity: 8 }, weight: 35 },
        { id: 's2_startup_no_mid', text: { zh: '继续上班，平淡但安稳。', en: 'Kept your job. Steady and stable.' }, effects: { stability: 10, sanity: 5 }, weight: 40 },
        { id: 's2_startup_no_bad', text: { zh: '同事创业成功上市了……你后悔得捶墙。', en: 'Colleague\'s startup IPO\'d... You\'re kicking yourself.' }, effects: { stability: 5, finance: -5, sanity: -8 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '辞职创业', en: 'Quit and join' },
      effects: { finance: -20, skill: 9, network: 10, sanity: -5 },
      outcomes: [
        { id: 's2_startup_yes_good', text: { zh: '创业产品大火，拿到了 A 轮融资！', en: 'Startup product went viral. Secured Series A funding!' }, effects: { finance: 10, skill: 11, network: 15, sanity: 12 }, weight: 30 },
        { id: 's2_startup_yes_mid', text: { zh: '创业艰难但学到了很多，产品在运营中。', en: 'Startup is tough but educational. Product is live.' }, effects: { finance: -20, skill: 11, network: 10, sanity: -5 }, weight: 40 },
        { id: 's2_startup_yes_bad', text: { zh: '烧光积蓄，产品上线无人问津，合伙人还跑了。', en: 'Burned savings. Product flopped. Co-founder bailed.' }, effects: { finance: -25, stability: -15, network: -10, sanity: -12 }, weight: 30 },
      ]
    },
    stage: 2,
    scene: 'universal'
  },
  {
    id: 's2_ai_industry_report',
    character: 'ai',
    text: { zh: '"报告显示你所在行业 40% 岗位将被 AI 取代。"', en: '"Report: 40% of jobs in your industry will be replaced by AI."' },
    leftChoice: {
      label: { zh: '不信', en: "Don't buy it" },
      effects: { stability: -10, sanity: -5 },
      outcomes: [
        { id: 's2_industry_report_left_good', text: { zh: '报告果然夸大其词，你的行业反而逆势增长了。', en: 'Report was indeed exaggerated. Your industry actually grew against the trend.' }, effects: { stability: 10, sanity: 8 }, weight: 35 },
        { id: 's2_industry_report_left_mid', text: { zh: '短期内没什么变化，但心里总有点不踏实。', en: 'Nothing changed short-term, but a nagging unease lingers.' }, effects: { stability: -10, sanity: -8 }, weight: 40 },
        { id: 's2_industry_report_left_bad', text: { zh: '半年后公司开始大规模引入 AI，你的岗位首当其冲。', en: 'Six months later the company rolled out AI en masse. Your role was first to go.' }, effects: { stability: -20, finance: -10, sanity: -15 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '未雨绸缪', en: 'Prepare now' },
      effects: { skill: 8, stability: 5, finance: -10, sanity: 5 },
      outcomes: [
        { id: 's2_industry_report_right_good', text: { zh: '提前学的 AI 技能派上大用场，你成了部门转型顾问！', en: "AI skills you learned early proved invaluable. You became the department's transformation advisor!" }, effects: { skill: 11, network: 10, finance: 5, sanity: 10 }, weight: 35 },
        { id: 's2_industry_report_right_mid', text: { zh: '花了时间精力做准备，目前还看不到回报。', en: 'Invested time and energy preparing. No payoff visible yet.' }, effects: { skill: 8, stability: 5, finance: -10, sanity: -5 }, weight: 40 },
        { id: 's2_industry_report_right_bad', text: { zh: '花大钱考了一堆证书，结果行业变革方向完全不同。', en: 'Spent big on certifications. Industry shifted in a completely different direction.' }, effects: { skill: -5, finance: -15, sanity: -10 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'universal'
  },
  {
    id: 's2_senior_promote_tip',
    character: 'senior',
    text: { zh: '"想升管理层？得学会放弃技术执念。"', en: '"Want management? Learn to let go of tech obsession."' },
    leftChoice: {
      label: { zh: '走技术路', en: 'Stay technical' },
      effects: { skill: 9, network: -10, sanity: 5 },
      outcomes: [
        { id: 's2_promote_tip_left_good', text: { zh: '深耕技术让你成了不可替代的架构师，薪资反超管理层。', en: 'Deep tech expertise made you an irreplaceable architect. Salary surpassed management.' }, effects: { skill: 11, finance: 15, sanity: 10 }, weight: 35 },
        { id: 's2_promote_tip_left_mid', text: { zh: '技术能力提升了，但感觉天花板越来越近。', en: 'Technical skills improved, but the ceiling feels closer and closer.' }, effects: { skill: 11, network: -10, sanity: -5 }, weight: 40 },
        { id: 's2_promote_tip_left_bad', text: { zh: '公司重组，纯技术岗被合并，你的团队被打散了。', en: 'Company restructured. Pure tech roles merged. Your team was dissolved.' }, effects: { network: -15, stability: -10, sanity: -10 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '转管理', en: 'Go management' },
      effects: { network: 15, skill: -10, finance: 10, sanity: -3 },
      outcomes: [
        { id: 's2_promote_tip_right_good', text: { zh: '管理之路出奇顺利，半年后升了总监！', en: 'Management track went surprisingly well. Promoted to director in six months!' }, effects: { network: 20, finance: 15, sanity: 12 }, weight: 35 },
        { id: 's2_promote_tip_right_mid', text: { zh: '管人比写代码累多了，但收入确实涨了。', en: 'Managing people is way harder than coding, but income did go up.' }, effects: { network: 15, skill: -10, finance: 10, sanity: -5 }, weight: 40 },
        { id: 's2_promote_tip_right_bad', text: { zh: '下属不服管，项目延期，你两头不讨好。', en: 'Team resisted your leadership. Project delayed. You pleased no one.' }, effects: { network: -10, stability: -15, sanity: -12 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'office'
  },
  {
    id: 's2_boss_budget_cut',
    character: 'boss',
    text: { zh: '"预算砍了一半，你的团队要缩编。"', en: '"Budget cut in half. Your team needs to shrink."' },
    leftChoice: {
      label: { zh: '裁人', en: 'Cut staff' },
      effects: { finance: 10, network: -15, sanity: -8 },
      outcomes: [
        { id: 's2_budget_cut_left_good', text: { zh: '精简后团队效率反而提高了，老板很满意。', en: 'Leaner team became more efficient. Boss was pleased.' }, effects: { finance: 15, skill: 4, sanity: -5 }, weight: 35 },
        { id: 's2_budget_cut_left_mid', text: { zh: '裁员完成了，剩下的人压力山大但还在撑。', en: 'Layoffs done. Remaining team is stressed but holding on.' }, effects: { finance: 10, network: -15, sanity: -10 }, weight: 40 },
        { id: 's2_budget_cut_left_bad', text: { zh: '被裁的人在社交媒体上曝光了你，行业口碑崩了。', en: 'Laid-off staff exposed you on social media. Your industry reputation tanked.' }, effects: { network: -20, stability: -10, sanity: -12 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '争取保住', en: 'Fight to keep' },
      effects: { network: 10, stability: -10, finance: -10, sanity: -5 },
      outcomes: [
        { id: 's2_budget_cut_right_good', text: { zh: '你据理力争说服了高层，团队完整保留，士气大振！', en: 'You convinced upper management. Team kept intact. Morale soared!' }, effects: { network: 15, stability: 5, sanity: 10 }, weight: 35 },
        { id: 's2_budget_cut_right_mid', text: { zh: '保住了大部分人，但预算紧张，项目缩水了。', en: 'Kept most of the team, but tight budget meant scaled-down projects.' }, effects: { network: 10, stability: -10, finance: -10, sanity: -8 }, weight: 40 },
        { id: 's2_budget_cut_right_bad', text: { zh: '老板觉得你不识大体，把你也列入了优化名单。', en: "Boss thought you couldn't see the big picture. Added you to the optimization list." }, effects: { stability: -20, network: -5, sanity: -15 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'office'
  },
  {
    id: 's2_boss_ai_ethics',
    character: 'boss',
    text: { zh: '"公司AI产品出了伦理问题，你负责善后？"', en: '"Company AI product has ethics issues. Handle it?"' },
    leftChoice: {
      label: { zh: '不碰', en: 'Stay away' },
      effects: { stability: 10, network: -10, sanity: 5 },
      outcomes: [
        { id: 's2_boss_ai_ethics_left_good', text: { zh: '你避开了这个坑，后来项目果然被监管部门点名，接手的人被问责了。', en: 'You dodged a bullet. The project got flagged by regulators and the person who took it got blamed.' }, effects: { stability: 15, skill: 4, sanity: 8 }, weight: 35 },
        { id: 's2_boss_ai_ethics_left_mid', text: { zh: '老板虽然不太高兴，但也没为难你，只是以后好项目轮不到你了。', en: 'Boss wasn\'t thrilled but didn\'t push it. Just no more good projects coming your way.' }, effects: { stability: 10, network: -10, sanity: -5 }, weight: 40 },
        { id: 's2_boss_ai_ethics_left_bad', text: { zh: '老板觉得你不够担当，年终评估给了个C，年终奖泡汤。', en: 'Boss sees you as lacking initiative. Got a C rating at year-end review. Bonus gone.' }, effects: { stability: 5, network: -15, finance: -10, sanity: -8 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '接手', en: 'Take over' },
      effects: { stability: -10, network: 15, skill: 8, sanity: -8 },
      outcomes: [
        { id: 's2_boss_ai_ethics_right_good', text: { zh: '你成功化解了伦理危机，公司声誉反而提升了，你成了管理层的红人。', en: 'You resolved the ethics crisis brilliantly. Company reputation improved and you became management\'s favorite.' }, effects: { stability: 10, network: 20, skill: 8, sanity: 10 }, weight: 35 },
        { id: 's2_boss_ai_ethics_right_mid', text: { zh: '问题勉强解决了，但过程中得罪了不少人，功过相抵。', en: 'Problem mostly solved, but you offended several people along the way. Gains and losses balanced out.' }, effects: { stability: -5, network: 5, skill: 8, sanity: -8 }, weight: 40 },
        { id: 's2_boss_ai_ethics_right_bad', text: { zh: '伦理问题越挖越深，媒体曝光后你成了替罪羊，简历上多了个污点。', en: 'The deeper you dug, the worse it got. Media exposed it and you became the scapegoat.' }, effects: { stability: -20, network: -10, skill: -5, sanity: -15 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'office'
  },
  {
    id: 's2_colleague_burnout',
    character: 'colleague',
    text: { zh: '"我快要累死了，你呢？要不一起请假？"', en: '"I\'m burning out. You too? Take time off together?"' },
    leftChoice: {
      label: { zh: '继续卷', en: 'Keep grinding' },
      effects: { skill: 8, stability: -15, sanity: -8 },
      outcomes: [
        { id: 's2_colleague_burnout_left_good', text: { zh: '坚持扛了下来，季度末拿到了最佳员工奖和丰厚奖金。', en: 'You pushed through and won Employee of the Quarter with a fat bonus.' }, effects: { skill: 11, finance: 15, sanity: 5 }, weight: 35 },
        { id: 's2_colleague_burnout_left_mid', text: { zh: '虽然累到不行，但项目按时交付了，老板点了个赞。', en: 'Exhausted but the project shipped on time. Boss gave you a thumbs up.' }, effects: { skill: 8, stability: -10, sanity: -10 }, weight: 40 },
        { id: 's2_colleague_burnout_left_bad', text: { zh: '连续加班三周后你进了医院，医生说再这样下去会出大问题。', en: 'Three weeks of overtime landed you in the hospital. Doctor said you\'re heading for serious trouble.' }, effects: { stability: -20, skill: -5, finance: -10, sanity: -15 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '休息', en: 'Take a break' },
      effects: { stability: 15, skill: -10, sanity: 8 },
      outcomes: [
        { id: 's2_colleague_burnout_right_good', text: { zh: '休假回来精力充沛，效率翻倍，一周干完了别人两周的活。', en: 'Came back from break fully recharged. Doubled your output and finished two weeks\' work in one.' }, effects: { stability: 15, skill: 8, finance: 5, sanity: 12 }, weight: 35 },
        { id: 's2_colleague_burnout_right_mid', text: { zh: '休息了几天感觉好多了，但回来发现落下的工作堆成山。', en: 'A few days off felt great, but the pile of work waiting for you was mountainous.' }, effects: { stability: 10, skill: -5, sanity: 8 }, weight: 40 },
        { id: 's2_colleague_burnout_right_bad', text: { zh: '请假期间项目出了紧急状况，领导打了十几个电话催你回来，假没休成还被记了一笔。', en: 'Emergency hit during your leave. Boss called a dozen times to drag you back. No rest and a mark on your record.' }, effects: { stability: -5, skill: -10, network: -10, sanity: -10 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'universal'
  },
  // Career-specific: programmer
  {
    id: 's2_ai_code_entire_module',
    character: 'ai',
    text: { zh: '"AI 已经可以独立完成整个模块的开发了。"', en: '"AI can now build entire modules independently."' },
    leftChoice: {
      label: { zh: '坚持手写', en: 'Code manually' },
      effects: { skill: 8, stability: -15, sanity: 5 },
      outcomes: [
        { id: 's2_ai_code_left_good', text: { zh: '你对底层原理的理解让你成了团队中不可替代的人。', en: 'Your deep understanding of fundamentals made you irreplaceable on the team.' }, effects: { skill: 11, network: 10, sanity: 10 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's2_ai_code_left_mid', text: { zh: '手写代码效率虽低，但质量还不错。', en: 'Manual coding was slower, but quality held up.' }, effects: { skill: 8, stability: -10, sanity: -5 }, weight: 40 },
        { id: 's2_ai_code_left_bad', text: { zh: '项目进度严重落后，老板对你很不满。', en: 'Project fell way behind schedule. Boss is very unhappy.' }, effects: { stability: -20, network: -10, sanity: -12 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '转向架构', en: 'Move to architecture' },
      effects: { skill: 9, stability: -5, sanity: 5 },
      outcomes: [
        { id: 's2_ai_code_right_good', text: { zh: '你设计的架构被全公司采纳，AI 负责实现，效率翻倍！', en: 'Your architecture was adopted company-wide. AI handles implementation, doubling efficiency!' }, effects: { skill: 11, network: 10, finance: 10, sanity: 12 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's2_ai_code_right_mid', text: { zh: '架构转型还在适应中，学到了不少新东西。', en: 'Still adapting to the architecture role, but learning a lot.' }, effects: { skill: 11, stability: -5, sanity: 5 }, weight: 40 },
        { id: 's2_ai_code_right_bad', text: { zh: '架构设计失误，AI 生成的代码全是 bug，你背锅了。', en: 'Architecture design flaw. AI-generated code was full of bugs. You took the blame.' }, effects: { stability: -15, network: -10, sanity: -12 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'office',
    careerIds: ['programmer']
  },
  {
    id: 's2_headhunter_tech_lead',
    character: 'headhunter',
    text: { zh: '"有家 AI 公司找技术负责人，薪资翻倍。"', en: '"AI company looking for tech lead. Double salary."' },
    leftChoice: {
      label: { zh: '留下', en: 'Stay' },
      effects: { stability: 10, sanity: 5 },
      outcomes: [
        { id: 's2_tech_lead_left_good', text: { zh: '公司感念你的忠诚，给你升了副总监。', en: 'Company rewarded your loyalty with a VP of Engineering title.' }, effects: { stability: 15, network: 10, finance: 10, sanity: 10 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's2_tech_lead_left_mid', text: { zh: '一切照旧，稳定但没什么变化。', en: 'Business as usual. Stable but uneventful.' }, effects: { stability: 10, sanity: 5 }, weight: 40 },
        { id: 's2_tech_lead_left_bad', text: { zh: '原公司被收购，你的职位变得尴尬。', en: 'Company got acquired. Your position became awkward.' }, effects: { stability: -10, network: -10, sanity: -10 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '跳过去', en: 'Switch' },
      effects: { finance: 20, stability: -15, skill: 8, sanity: -5 },
      outcomes: [
        { id: 's2_tech_lead_right_good', text: { zh: '新公司上市了，你的期权翻了好几倍！', en: 'New company went public. Your stock options multiplied!' }, effects: { finance: 20, skill: 11, network: 10, sanity: 12 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's2_tech_lead_right_mid', text: { zh: '新环境压力大，但薪资确实涨了不少。', en: 'High pressure environment, but the pay raise is real.' }, effects: { finance: 15, stability: -10, skill: 8, sanity: -8 }, weight: 40 },
        { id: 's2_tech_lead_right_bad', text: { zh: 'AI 公司烧完钱倒闭了，你又要重新找工作。', en: 'AI company burned through funding and shut down. Back to job hunting.' }, effects: { finance: -15, stability: -20, sanity: -15 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'office',
    careerIds: ['programmer']
  },  // School scene: general (no careerIds)
  {
    id: 's2_boss_school_ranking',
    character: 'boss',
    text: { zh: '学校排名从区里前三跌到前十开外，校长开了紧急会议："各位，再这样下去大家年终都别想了。"', en: 'School rankings fell from top 3 to outside the top 10. The principal called an emergency meeting: "If this continues, forget about year-end bonuses."' },
    leftChoice: {
      label: { zh: '按部就班', en: 'Stay the course' },
      effects: { stability: -10, sanity: -5 },
      outcomes: [
        { id: 's2_ranking_left_good', text: { zh: '你坚持教学理念，学生素质反而获得了家长好评，口碑逆袭。', en: 'You stuck to your principles. Parents praised student quality. Reputation rebounded.' }, effects: { stability: 10, network: 10, sanity: 10 }, weight: 35 },
        { id: 's2_ranking_left_mid', text: { zh: '排名没变化，校长有点不满但没追究。', en: 'Rankings didn\'t budge. Principal is unhappy but didn\'t push it.' }, effects: { stability: -10, sanity: -8 }, weight: 40 },
        { id: 's2_ranking_left_bad', text: { zh: '年终考核垫底，被安排去带最差的班级。', en: 'Ranked last in annual review. Assigned to the worst class.' }, effects: { stability: -15, network: -10, sanity: -10 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '加码冲刺', en: 'Push harder' },
      effects: { skill: 8, stability: -15, sanity: -8 },
      outcomes: [
        { id: 's2_ranking_right_good', text: { zh: '你的班级成绩飙升，校长在全校大会上点名表扬你！', en: 'Your class scores skyrocketed. The principal praised you by name at the school assembly!' }, effects: { skill: 11, network: 15, stability: 10, sanity: 10 }, weight: 35 },
        { id: 's2_ranking_right_mid', text: { zh: '成绩有所提升，但你和学生都累得够呛。', en: 'Grades went up, but both you and the students are exhausted.' }, effects: { skill: 8, stability: -10, sanity: -10 }, weight: 40 },
        { id: 's2_ranking_right_bad', text: { zh: '高强度教学引发学生抵触情绪，有人写匿名信投诉你。', en: 'The intense pace triggered student pushback. Someone filed an anonymous complaint.' }, effects: { stability: -20, network: -10, sanity: -12 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'school'
  },
  {
    id: 's2_ai_grading_system',
    character: 'ai',
    text: { zh: '学校宣布 AI 自动批改系统全校强制上线，以后作文和主观题都交给机器打分了。', en: 'The school announces a mandatory AI auto-grading system. From now on, essays and subjective answers will be scored by machines.' },
    leftChoice: {
      label: { zh: '抵制', en: 'Resist' },
      effects: { stability: -10, skill: 4, sanity: -5 },
      outcomes: [
        { id: 's2_grading_left_good', text: { zh: 'AI 系统出了大 bug，把全年级作文打了零分，你成了"有远见的人"。', en: 'The AI system had a massive bug — gave the entire grade zeroes on essays. You became "the one who saw it coming."' }, effects: { stability: 10, network: 10, skill: 4, sanity: 10 }, weight: 35 },
        { id: 's2_grading_left_mid', text: { zh: '大家都用了就你不用，校长找你"谈心"了。', en: 'Everyone adopted it except you. The principal had a "heart-to-heart" with you.' }, effects: { stability: -10, skill: 4, sanity: -5 }, weight: 40 },
        { id: 's2_grading_left_bad', text: { zh: '被扣上"抗拒技术进步"的帽子，学校通报批评。', en: 'Labeled as "resisting technological progress." Got a formal reprimand.' }, effects: { stability: -15, network: -10, sanity: -10 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '配合', en: 'Cooperate' },
      effects: { skill: 8, stability: -5, sanity: 3 },
      outcomes: [
        { id: 's2_grading_right_good', text: { zh: '你用 AI 批改省下的时间做了个性化辅导，学生成绩大幅提升！', en: 'You used the time saved by AI grading for personalized tutoring. Student scores jumped dramatically!' }, effects: { skill: 11, network: 10, sanity: 10 }, weight: 35 },
        { id: 's2_grading_right_mid', text: { zh: '系统还行，但偶尔抽风，你得花时间复查。', en: 'The system works okay, but glitches sometimes. You spend time double-checking.' }, effects: { skill: 8, stability: -5, sanity: -5 }, weight: 40 },
        { id: 's2_grading_right_bad', text: { zh: 'AI 把一篇优秀作文打了不及格，家长投诉到教育局，你背了锅。', en: 'The AI flunked an excellent essay. Parents complained to the education bureau. You took the blame.' }, effects: { stability: -15, network: -10, sanity: -12 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'school'
  },
  {
    id: 's2_hr_tutoring_regulation',
    character: 'hr',
    text: { zh: '教育局发了红头文件：全面禁止在职教师课外有偿辅导，违者开除。你之前一直在周末给学生补课赚外快。', en: 'The Ministry issued a red-letter decree: all paid after-school tutoring by active teachers is banned. Violators will be fired. You\'ve been earning extra cash tutoring on weekends.' },
    leftChoice: {
      label: { zh: '遵守', en: 'Comply' },
      effects: { stability: 10, finance: -15, sanity: -5 },
      outcomes: [
        { id: 's2_tutoring_left_good', text: { zh: '你把精力转向校内教研，发表的论文获奖了，升职加薪！', en: 'You redirected your energy to in-school research. Your paper won an award — promotion and raise!' }, effects: { stability: 15, skill: 11, finance: 10, sanity: 10 }, weight: 35 },
        { id: 's2_tutoring_left_mid', text: { zh: '收入少了一大截，但至少工作稳定。', en: 'Income took a big hit, but at least your job is secure.' }, effects: { stability: 10, finance: -15, sanity: -5 }, weight: 40 },
        { id: 's2_tutoring_left_bad', text: { zh: '房贷压力变大了，生活质量明显下降。', en: 'Mortgage pressure increased. Quality of life noticeably dropped.' }, effects: { finance: -20, stability: 5, sanity: -10 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '私下继续', en: 'Continue secretly' },
      effects: { finance: 15, stability: -20, sanity: -8 },
      outcomes: [
        { id: 's2_tutoring_right_good', text: { zh: '家长们守口如瓶，你的外快照拿不误。', en: 'Parents kept quiet. Your side income continued uninterrupted.' }, effects: { finance: 20, network: 5, sanity: 5 }, weight: 35 },
        { id: 's2_tutoring_right_mid', text: { zh: '提心吊胆地继续补课，每次都怕被举报。', en: 'You kept tutoring nervously, fearing a report every session.' }, effects: { finance: 15, stability: -15, sanity: -12 }, weight: 40 },
        { id: 's2_tutoring_right_bad', text: { zh: '被学生家长的"前任"举报了，面临停职调查。', en: 'A disgruntled ex-parent reported you. Now facing suspension and investigation.' }, effects: { stability: -25, finance: -20, network: -10, sanity: -15 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'school'
  },
  // Career-specific: teacher
  {
    id: 's2_ai_personalized_tutoring',
    character: 'ai',
    text: { zh: '"AI 个性化辅导比班级授课效果好3倍。"', en: '"AI personalized tutoring is 3x more effective than classes."' },
    leftChoice: {
      label: { zh: '不信', en: 'Skeptical' },
      effects: { stability: -10, sanity: -3 },
      outcomes: [
        { id: 's2_ai_tutor_left_good', text: { zh: '你的传统教学法在对比实验中意外胜出，得到了表彰。', en: 'Your traditional methods unexpectedly won in a comparison study. Got recognition.' }, effects: { stability: 10, network: 10, sanity: 10 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's2_ai_tutor_left_mid', text: { zh: '其他老师都在用 AI，你感到有些落后。', en: 'Other teachers are using AI. You feel a bit behind.' }, effects: { stability: -10, skill: -10, sanity: -8 }, weight: 40 },
        { id: 's2_ai_tutor_left_bad', text: { zh: '学生家长投诉你教学方式过时，校长找你谈话了。', en: 'Parents complained your teaching is outdated. Principal called you in.' }, effects: { stability: -15, network: -15, sanity: -10 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '融入教学', en: 'Integrate AI' },
      effects: { skill: 9, stability: -5, sanity: 5 },
      outcomes: [
        { id: 's2_ai_tutor_right_good', text: { zh: '你的 AI 辅助教学班成绩全校第一，教育局来观摩！', en: 'Your AI-assisted class ranked #1 in school. Education bureau came to observe!' }, effects: { skill: 11, network: 15, sanity: 12 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's2_ai_tutor_right_mid', text: { zh: '学生成绩有所提升，但适应期比想象中长。', en: 'Student grades improved, but the adjustment period was longer than expected.' }, effects: { skill: 11, stability: -5, sanity: 5 }, weight: 40 },
        { id: 's2_ai_tutor_right_bad', text: { zh: '学生过度依赖 AI 辅导，独立思考能力下降了。', en: 'Students became over-reliant on AI tutoring. Independent thinking declined.' }, effects: { stability: -15, network: -10, sanity: -10 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'school',
    careerIds: ['teacher']
  },
  {
    id: 's2_hr_school_reform',
    character: 'hr',
    text: { zh: '"学校要大改革，你愿意加入改革委员会吗？"', en: '"School is reforming. Join the reform committee?"' },
    leftChoice: {
      label: { zh: '不参与', en: 'Pass' },
      effects: { stability: 10, sanity: 5 },
      outcomes: [
        { id: 's2_school_reform_left_good', text: { zh: '改革搞得一团糟，没参与的你反而安稳度过。', en: 'Reform was a mess. You stayed out of it and stayed safe.' }, effects: { stability: 15, sanity: 8 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's2_school_reform_left_mid', text: { zh: '改革跟你没关系，继续照常教书。', en: 'Reform didn\'t involve you. Kept teaching as usual.' }, effects: { stability: 10, sanity: 5 }, weight: 40 },
        { id: 's2_school_reform_left_bad', text: { zh: '改革后你被调到了边缘部门，因为"没有参与精神"。', en: 'After reform, you got reassigned to a marginal department for "lacking initiative."' }, effects: { stability: -10, network: -15, sanity: -8 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '参与', en: 'Join' },
      effects: { network: 15, stability: -10, skill: 8, sanity: -5 },
      outcomes: [
        { id: 's2_school_reform_right_good', text: { zh: '改革大获成功，你被提拔为教研主任！', en: 'Reform was a success. You got promoted to Head of Teaching and Research!' }, effects: { network: 20, skill: 11, finance: 10, sanity: 12 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's2_school_reform_right_mid', text: { zh: '改革推进中遇到阻力，但你学到了管理经验。', en: 'Reform met resistance, but you gained management experience.' }, effects: { network: 10, stability: -10, skill: 8, sanity: -5 }, weight: 40 },
        { id: 's2_school_reform_right_bad', text: { zh: '改革派内部分裂，你被卷入派系斗争消耗很大。', en: 'Reform faction split internally. You got dragged into factional politics.' }, effects: { stability: -20, network: -10, sanity: -12 }, weight: 25 },
      ]
    },
    stage: 2,
    scene: 'school',
    careerIds: ['teacher']
  },
  {
    id: 's2_event_acquisition',
    character: 'boss',
    text: { zh: '"一家科技巨头想收购我们公司。早期员工能套现，但新东家肯定会\'优化人员结构\'。"', en: '"A tech giant wants to acquire our company. Early employees cash out, but the new owners will definitely \'restructure\'."' },
    leftChoice: {
      label: { zh: '希望收购失败', en: 'Hope it fails' },
      effects: { stability: 10, finance: -10, sanity: -5 },
      outcomes: [
        { id: 's2_event_acquisition_left_good', text: { zh: '收购确实没成，老板感动于你的忠诚，给你加了期权。', en: 'Acquisition fell through. Boss was touched by your loyalty. Got more equity.' }, effects: { finance: 15, stability: 15, sanity: 10 }, weight: 30 },
        { id: 's2_event_acquisition_left_mid', text: { zh: '收购谈判拖了半年，人心惶惶，最后不了了之。', en: 'Acquisition talks dragged on for 6 months. Morale tanked. Eventually fell apart.' }, effects: { stability: 5, sanity: -15 }, weight: 40 },
        { id: 's2_event_acquisition_left_bad', text: { zh: '收购失败后公司资金链断裂，反而开始大裁员。', en: 'After acquisition failed, company ran out of money and started mass layoffs.' }, effects: { stability: -25, finance: -20, sanity: -20 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '推动成交', en: 'Push for the deal' },
      effects: { finance: 20, stability: -20, sanity: -5 },
      outcomes: [
        { id: 's2_event_acquisition_right_good', text: { zh: '成功套现！你拿到了一大笔钱，提前实现了财务自由。', en: 'Cashed out! Got a huge payout. Financial freedom ahead of schedule.' }, effects: { finance: 30, sanity: 15, stability: -15 }, weight: 30 },
        { id: 's2_event_acquisition_right_mid', text: { zh: '收购成功了，拿到了一些钱，但新公司给你安排了一个边缘岗位。', en: 'Deal closed. Got some money, but new company put you in a dead-end role.' }, effects: { finance: 15, stability: -20, sanity: -10 }, weight: 40 },
        { id: 's2_event_acquisition_right_bad', text: { zh: '收购完成后第一周你就被裁了，补偿金还没拿到手。', en: 'Fired in the first week after acquisition. Severance hasn\'t arrived yet.' }, effects: { stability: -25, finance: -10, sanity: -25 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 2,
    scene: 'office'
  },
  {
    id: 's2_event_ip_theft',
    character: 'colleague',
    text: { zh: '"你发现竞争对手的新产品跟你的 side project 一模一样——有人偷了你的创意。"', en: '"You discovered a competitor\'s new product is a carbon copy of your side project — someone stole your idea."' },
    leftChoice: {
      label: { zh: '请律师', en: 'Lawyer up' },
      effects: { finance: -20, stability: 5, sanity: -15 },
      outcomes: [
        { id: 's2_event_ip_theft_left_good', text: { zh: '官司打赢了！对方赔了一大笔钱，你的名声也打响了。', en: 'Won the lawsuit! Huge settlement and your reputation soared.' }, effects: { finance: 25, network: 15, sanity: 15 }, weight: 30 },
        { id: 's2_event_ip_theft_left_mid', text: { zh: '官司拖了大半年，精力耗尽，最后庭外和解拿了一点补偿。', en: 'Lawsuit dragged on. Exhausting. Settled out of court for a small amount.' }, effects: { finance: -10, sanity: -15, skill: -5 }, weight: 40 },
        { id: 's2_event_ip_theft_left_bad', text: { zh: '对方有强大的法务团队，你完败，还倒贴了律师费。', en: 'They had a powerful legal team. You lost and had to pay their legal fees too.' }, effects: { finance: -25, sanity: -25, stability: -10 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '抢先上线', en: 'Beat them to market' },
      effects: { skill: 11, sanity: -10, finance: -5, stability: -10 },
      outcomes: [
        { id: 's2_event_ip_theft_right_good', text: { zh: '你抢先发布了更强的版本，用户都转向了你！对手被打脸。', en: 'You launched a better version first. Users flocked to you. Competitor humiliated.' }, effects: { skill: 15, finance: 20, network: 15, sanity: 15 }, weight: 30 },
        { id: 's2_event_ip_theft_right_mid', text: { zh: '赶工上线了，但产品还很粗糙，用户评价一般。', en: 'Rushed to launch. Product was rough. Mixed reviews.' }, effects: { skill: 8, sanity: -15, finance: -10 }, weight: 40 },
        { id: 's2_event_ip_theft_right_bad', text: { zh: '赶工导致产品全是 bug，上线第一天就崩了，口碑炸了。', en: 'Rushed product was full of bugs. Crashed on day one. Reputation destroyed.' }, effects: { skill: -10, stability: -20, sanity: -25, network: -15 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 2,
    scene: 'universal'
  },
  {
    id: 's2_event_ai_love_letter',
    character: 'ai',
    text: { zh: '"你公司的 AI 助手最近每天早上给你写一封暖心鼓励信。\'你今天一定行的！\'……感动到不行。"', en: '"Your company\'s AI assistant started writing you a heartfelt motivational letter every morning. \'You\'ve got this today!\'... Actually touching."' },
    leftChoice: {
      label: { zh: '关掉这个功能', en: 'Disable it' },
      effects: { stability: 10, sanity: -10 },
      outcomes: [
        { id: 's2_event_ai_love_letter_left_good', text: { zh: '关了之后你反而学会了自我激励，变得更独立了。', en: 'After disabling it, you learned to self-motivate. Became more independent.' }, effects: { sanity: 15, skill: 8, stability: 10 }, weight: 30 },
        { id: 's2_event_ai_love_letter_left_mid', text: { zh: '关了之后早上总觉得少了点什么。', en: 'Something felt missing every morning after.' }, effects: { sanity: -10, stability: 5 }, weight: 40 },
        { id: 's2_event_ai_love_letter_left_bad', text: { zh: '没有了每天的鼓励，你的工作状态明显下滑了。', en: 'Without daily encouragement, your work performance noticeably declined.' }, effects: { sanity: -20, skill: -10 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '继续享受', en: 'Keep them coming' },
      effects: { sanity: 15, stability: -10, skill: -5 },
      outcomes: [
        { id: 's2_event_ai_love_letter_right_good', text: { zh: 'AI 的鼓励让你状态越来越好，连老板都注意到你最近特别积极。', en: 'AI\'s encouragement boosted your spirits. Even the boss noticed your positive energy.' }, effects: { sanity: 25, network: 10, skill: 4 }, weight: 30 },
        { id: 's2_event_ai_love_letter_right_mid', text: { zh: '每天看了确实开心，但你知道这只是算法，有点空虚。', en: 'Made you happy daily, but knowing it\'s just an algorithm felt hollow.' }, effects: { sanity: 5, stability: -10 }, weight: 40 },
        { id: 's2_event_ai_love_letter_right_bad', text: { zh: '你越来越依赖 AI 的情感支持，真实的人际关系反而疏远了。', en: 'You became dependent on AI emotional support. Real relationships drifted away.' }, effects: { sanity: -15, network: -20, stability: -15 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 2,
    scene: 'universal'
  },
  {
    id: 's2_event_whistleblower',
    character: 'colleague',
    text: { zh: '"你发现公司在用 AI 秘密监控所有员工的聊天记录。一个记者问你愿不愿意确认这件事。"', en: '"You found evidence your company uses AI to secretly monitor all employee chats. A journalist asks if you\'ll confirm."' },
    leftChoice: {
      label: { zh: '沉默', en: 'Stay silent' },
      effects: { stability: 10, sanity: -20, network: 5 },
      outcomes: [
        { id: 's2_event_whistleblower_left_good', text: { zh: '公司内部处理了这件事，没再继续监控了。你明哲保身是对的。', en: 'Company quietly stopped the monitoring. Playing it safe was right.' }, effects: { stability: 15, sanity: 5 }, weight: 30 },
        { id: 's2_event_whistleblower_left_mid', text: { zh: '秘密还是秘密，但你每次打字都觉得有人在看。', en: 'The secret stayed a secret. But typing anything feels watched now.' }, effects: { sanity: -20, stability: 5 }, weight: 40 },
        { id: 's2_event_whistleblower_left_bad', text: { zh: '别人爆了料，公司怀疑是你泄露的，你反而成了嫌疑人。', en: 'Someone else leaked. Company suspected you were the source.' }, effects: { stability: -20, sanity: -25, network: -15 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '吹哨', en: 'Blow the whistle' },
      effects: { stability: -20, sanity: 10, network: 15 },
      outcomes: [
        { id: 's2_event_whistleblower_right_good', text: { zh: '新闻曝光后你成了职场英雄！多家公司高薪挖你，TED 都来邀请你演讲。', en: 'You became a workplace hero! Companies offered big money. TED invited you to speak.' }, effects: { network: 25, finance: 15, sanity: 20 }, weight: 30 },
        { id: 's2_event_whistleblower_right_mid', text: { zh: '新闻出了，公司被罚了，但你也被列入了"不受欢迎"名单。', en: 'News broke, company got fined, but you\'re on the "unwelcome" list.' }, effects: { stability: -15, network: 15, sanity: 5 }, weight: 40 },
        { id: 's2_event_whistleblower_right_bad', text: { zh: '吹哨后被公司开除，还收到了律师函，打了一年官司。', en: 'Fired for whistleblowing. Got sued. Spent a year in legal battles.' }, effects: { stability: -25, finance: -20, sanity: -20 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 2,
    scene: 'office'
  },
  {
    id: 's2_event_viral_project',
    character: 'ai',
    text: { zh: '"你周末随手做的一个 AI 小项目突然爆火了。投资人、记者、你的老板全在打电话给你。"', en: '"Your weekend AI side project just went viral. Investors, journalists, and your boss are all calling."' },
    leftChoice: {
      label: { zh: '保持低调', en: 'Keep it low-key' },
      effects: { stability: 10, sanity: 5, network: -10 },
      outcomes: [
        { id: 's2_event_viral_project_left_good', text: { zh: '低调处理后继续完善产品，最后以高价被收购了。', en: 'Quietly improved the product. Eventually acquired at a premium.' }, effects: { finance: 25, skill: 8, sanity: 10 }, weight: 30 },
        { id: 's2_event_viral_project_left_mid', text: { zh: '热度过去了，项目也就那样了。', en: 'Hype died down. Project fizzled.' }, effects: { stability: 10, sanity: -5 }, weight: 40 },
        { id: 's2_event_viral_project_left_bad', text: { zh: '你的低调被解读为"不自信"，投资人全跑了。', en: 'Your modesty was read as "lack of confidence." Investors all walked.' }, effects: { network: -15, finance: -10, sanity: -15 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '全力投入', en: 'Go all in' },
      effects: { network: 20, finance: 10, stability: -15, sanity: -10 },
      outcomes: [
        { id: 's2_event_viral_project_right_good', text: { zh: '你辞职创业，产品半年内拿到了 A 轮融资！', en: 'You quit and founded a startup. Series A in 6 months!' }, effects: { finance: 25, network: 20, skill: 11, sanity: 10 }, weight: 30 },
        { id: 's2_event_viral_project_right_mid', text: { zh: '辞职后才发现创业比想象中难10倍，但在坚持。', en: 'Quitting revealed startup life is 10x harder than expected. But persevering.' }, effects: { skill: 11, finance: -15, sanity: -15 }, weight: 40 },
        { id: 's2_event_viral_project_right_bad', text: { zh: '投资人只是口头承诺，钱迟迟不到，你辞了职却两手空空。', en: 'Investors made verbal promises that never materialized. Quit your job for nothing.' }, effects: { finance: -20, stability: -25, sanity: -25 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 2,
    scene: 'universal'
  },
  {
    id: 's2_event_team_poached',
    character: 'headhunter',
    text: { zh: '"你最大的竞争对手刚刚挖走了你整个团队。只剩你一个人了。"', en: '"Your biggest competitor just poached your entire team. You\'re the only one left."' },
    leftChoice: {
      label: { zh: '独自重建', en: 'Rebuild alone' },
      effects: { skill: 11, sanity: -20, network: -15 },
      outcomes: [
        { id: 's2_event_team_poached_left_good', text: { zh: '你从零重建的新团队反而更强！那些叛徒后来都后悔了。', en: 'Your rebuilt team was even stronger. The defectors regretted leaving.' }, effects: { skill: 15, network: 20, sanity: 15 }, weight: 30 },
        { id: 's2_event_team_poached_left_mid', text: { zh: '慢慢招了几个新人，但要很久才能恢复元气。', en: 'Slowly hired new people. Will take ages to recover.' }, effects: { skill: 8, sanity: -15, network: -10 }, weight: 40 },
        { id: 's2_event_team_poached_left_bad', text: { zh: '一个人根本撑不住，项目全部延期，老板开始怀疑你的能力。', en: 'Can\'t handle it alone. All projects delayed. Boss questions your ability.' }, effects: { stability: -25, sanity: -25, skill: -10 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '加入他们', en: 'Join them' },
      effects: { finance: 15, network: 10, stability: -15, sanity: -10 },
      outcomes: [
        { id: 's2_event_team_poached_right_good', text: { zh: '加入后发现对面确实牛，你的能力在新环境得到了极大提升。', en: 'The other side was legit. Your skills thrived in the new environment.' }, effects: { skill: 15, finance: 15, sanity: 10 }, weight: 30 },
        { id: 's2_event_team_poached_right_mid', text: { zh: '新公司待遇是好了，但前同事都觉得你是叛徒。', en: 'Better pay, but former colleagues see you as a traitor.' }, effects: { finance: 10, network: -15, sanity: -10 }, weight: 40 },
        { id: 's2_event_team_poached_right_bad', text: { zh: '加入后发现是个坑，他们挖人只是为了打压你原来的公司。', en: 'Turns out they poached you just to cripple your old company. You\'re dispensable.' }, effects: { stability: -20, sanity: -25, network: -15 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 2,
    scene: 'universal'
  },
];

// ============================================================
// Stage 3: Late Career (Years 21-30) — Effects ±15-25
// 15 generic + career-specific cards
// Characters: more hr, headhunter, ai
// ============================================================

const stage3Generic: SwipeCard[] = [
  {
    id: 's3_hr_mass_layoff',
    character: 'hr',
    text: { zh: '"公司全面AI化，你的部门整个撤了。"', en: '"Company went full AI. Your entire department is gone."' },
    leftChoice: {
      label: { zh: '接受遣散', en: 'Take severance' },
      effects: { stability: -25, finance: 19, sanity: -10 },
      outcomes: [
        { id: 's3_mass_sever_good', text: { zh: '拿到高额遣散费，用来进修了 AI 研究生课程。', en: 'Got a generous severance. Used it to fund an AI graduate program.' }, effects: { finance: 25, skill: 15, sanity: 15 }, weight: 30 },
        { id: 's3_mass_sever_mid', text: { zh: '遣散费到手，但重新找工作花了好几个月。', en: 'Got the severance, but job hunting took months.' }, effects: { stability: -25, finance: 19, sanity: -15 }, weight: 45 },
        { id: 's3_mass_sever_bad', text: { zh: '行业不景气，半年没找到工作，遣散费快花完了。', en: 'Industry downturn. No job for six months. Severance almost gone.' }, effects: { stability: -31, finance: -12, sanity: -22 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '争取转岗', en: 'Fight for transfer' },
      effects: { stability: -12, network: -19, skill: 15, sanity: -9 },
      outcomes: [
        { id: 's3_mass_transfer_good', text: { zh: '成功转到了 AI 应用部门，成为技术骨干！', en: 'Transferred to AI applications team. Became a tech lead!' }, effects: { skill: 18, stability: 6, network: 13, sanity: 19 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_mass_transfer_mid', text: { zh: '转岗成功但岗位边缘化，前途未卜。', en: 'Transfer succeeded but role is marginal. Future uncertain.' }, effects: { stability: -12, network: -19, skill: 15, sanity: -12 }, weight: 40 },
        { id: 's3_mass_transfer_bad', text: { zh: '争取了半天还是被裁了，还得罪了 HR。', en: 'Fought hard but still got laid off. And now HR is upset.' }, effects: { stability: -31, network: -25, sanity: -22 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'office'
  },
  {
    id: 's3_ai_general_intelligence',
    character: 'ai',
    text: { zh: '"通用 AI 时代到来，大多数白领岗位都受影响。"', en: '"AGI era arrives. Most white-collar jobs affected."' },
    leftChoice: {
      label: { zh: '躺平', en: 'Give up' },
      effects: { stability: -25, skill: -19, sanity: -12 },
      outcomes: [
        { id: 's3_agi_left_good', text: { zh: '躺平了半年后悟了：人类的创造力和情感无法被替代，你开了家手工咖啡馆。', en: 'After six months of doing nothing, you realized human creativity is irreplaceable. Opened a craft coffee shop.' }, effects: { stability: 19, finance: -19, sanity: 19 }, weight: 30 },
        { id: 's3_agi_left_mid', text: { zh: '在家待了几个月，焦虑感并没有消退，存款也在慢慢减少。', en: 'Stayed home for months. Anxiety didn\'t fade and savings kept shrinking.' }, effects: { stability: -25, skill: -19, sanity: -17 }, weight: 40 },
        { id: 's3_agi_left_bad', text: { zh: '彻底放弃后与社会脱节，再想回去发现连面试机会都没了。', en: 'Completely disconnected from society. When you tried to come back, couldn\'t even get an interview.' }, effects: { stability: -31, skill: -25, network: -19, sanity: -25 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '寻找新方向', en: 'Find new path' },
      effects: { skill: 15, stability: -12, sanity: -7 },
      outcomes: [
        { id: 's3_agi_right_good', text: { zh: '你找到了人机协作的新模式，成了 AGI 时代的先驱者，各大媒体都来采访你。', en: 'You pioneered a new human-AI collaboration model. Became an AGI-era thought leader. Media lined up for interviews.' }, effects: { skill: 18, network: 25, finance: 19, sanity: 23 }, weight: 30 },
        { id: 's3_agi_right_mid', text: { zh: '新方向有潜力但还在摸索中，至少比原地等待强。', en: 'New direction shows promise but still figuring it out. At least better than standing still.' }, effects: { skill: 18, stability: -12, sanity: -12 }, weight: 40 },
        { id: 's3_agi_right_bad', text: { zh: '折腾了一圈发现新方向也被 AGI 碾压，精力和积蓄都耗尽了。', en: 'After all the effort, the new path got steamrolled by AGI too. Energy and savings depleted.' }, effects: { skill: -19, finance: -25, stability: -19, sanity: -22 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_headhunter_exec_role',
    character: 'headhunter',
    text: { zh: '"有个 AI 公司找 CEO，年薪百万。"', en: '"AI company seeking CEO. Million-dollar salary."' },
    leftChoice: {
      label: { zh: '不够格', en: 'Not qualified' },
      effects: { stability: 19, sanity: 6 },
      outcomes: [
        { id: 's3_exec_no_good', text: { zh: '继续在现公司深耕，成了不可替代的专家。', en: 'Stayed and deepened expertise. Became irreplaceable.' }, effects: { stability: 19, skill: 10, sanity: 15 }, weight: 35 },
        { id: 's3_exec_no_mid', text: { zh: '谦虚地拒绝了，生活没什么变化。', en: 'Humbly declined. Life unchanged.' }, effects: { stability: 19, sanity: 6 }, weight: 40 },
        { id: 's3_exec_no_bad', text: { zh: '后来那公司上市了，你错过了财务自由的机会。', en: 'That company IPO\'d later. You missed financial freedom.' }, effects: { stability: 6, finance: -12, sanity: -15 }, weight: 25 },
      ]
    },
    rightChoice: {
      label: { zh: '试试', en: 'Go for it' },
      effects: { finance: 31, stability: -25, network: 19, sanity: -10 },
      outcomes: [
        { id: 's3_exec_yes_good', text: { zh: '带领公司完成关键产品发布，成为行业传奇！', en: 'Led the company through a key product launch. Became an industry legend!' }, effects: { finance: 38, network: 31, skill: 15, sanity: 19 }, weight: 25  },
        { id: 's3_exec_yes_mid', text: { zh: '压力巨大但学到了很多管理经验。', en: 'Immense pressure but gained invaluable management experience.' }, effects: { finance: 31, stability: -25, network: 19, sanity: -12 }, weight: 40 },
        { id: 's3_exec_yes_bad', text: { zh: '公司内斗严重，半年后被董事会踢出了。', en: 'Office politics were brutal. Board kicked you out in six months.' }, effects: { stability: -31, network: -19, finance: 13, sanity: -20 }, weight: 35 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_boss_final_pivot',
    character: 'boss',
    text: { zh: '"公司要做最后的 AI 转型，成败在此一举。"', en: '"Company\'s final AI pivot. All or nothing."' },
    leftChoice: {
      label: { zh: '找退路', en: 'Plan exit' },
      effects: { stability: 19, skill: -19, sanity: -6 },
      outcomes: [
        { id: 's3_final_pivot_left_good', text: { zh: '退路找对了，跳到竞争对手那边成了核心骨干，薪资还涨了。', en: 'Exit plan worked perfectly. Joined a competitor as a core member with a raise.' }, effects: { stability: 25, finance: 19, sanity: 15 }, weight: 30 },
        { id: 's3_final_pivot_left_mid', text: { zh: '找到了备选方案，但一直犹豫不决，最后不上不下。', en: 'Found a backup plan but kept hesitating. Ended up in limbo.' }, effects: { stability: 19, skill: -19, sanity: -12 }, weight: 40 },
        { id: 's3_final_pivot_left_bad', text: { zh: '公司转型居然成功了！留下的人分了巨额奖金，你后悔得捶胸顿足。', en: 'The pivot actually succeeded! Those who stayed split a massive bonus. You regret everything.' }, effects: { stability: -19, finance: -25, sanity: -19 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '全力以赴', en: 'Go all in' },
      effects: { skill: 15, finance: -19, stability: -19, sanity: -9 },
      outcomes: [
        { id: 's3_final_pivot_right_good', text: { zh: '转型大获成功！你被提拔为新业务线负责人，公司股价翻了三倍。', en: 'Pivot was a smashing success! Promoted to head of new business line. Stock price tripled.' }, effects: { skill: 18, finance: 31, network: 19, sanity: 23 }, weight: 30 },
        { id: 's3_final_pivot_right_mid', text: { zh: '转型艰难推进中，累到脱相但学了一身新本事。', en: 'Pivot is grinding forward painfully. Exhausting but you picked up a whole set of new skills.' }, effects: { skill: 18, finance: -19, stability: -19, sanity: -12 }, weight: 40 },
        { id: 's3_final_pivot_right_bad', text: { zh: '公司转型失败，全员裁撤，你不仅没了工作还倒贴了项目尾款。', en: 'Company pivot failed. Everyone laid off. You lost your job and had to cover project debts.' }, effects: { skill: -19, finance: -31, stability: -25, sanity: -22 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'office'
  },
  {
    id: 's3_colleague_old_friend',
    character: 'colleague',
    text: { zh: '"十年没联系的老同事找你合作，靠谱吗？"', en: '"Old colleague from 10 years ago wants to partner up. Legit?"' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Decline' },
      effects: { stability: 13, sanity: 6 },
      outcomes: [
        { id: 's3_old_friend_left_good', text: { zh: '后来听说那人是个大忽悠，合伙人全被坑了，你躲过一劫。', en: 'Turns out the guy was a total fraud. All partners got scammed. You dodged a bullet.' }, effects: { stability: 25, finance: 19, sanity: 19 }, weight: 30 },
        { id: 's3_old_friend_left_mid', text: { zh: '拒绝了之后生活照旧，偶尔好奇他们做得怎么样。', en: 'Life went on after declining. Occasionally wondered how they were doing.' }, effects: { stability: 13, sanity: 6 }, weight: 40 },
        { id: 's3_old_friend_left_bad', text: { zh: '那人后来做成了独角兽，你肠子都悔青了。', en: 'That person built a unicorn company. You were green with regret.' }, effects: { stability: -19, finance: -19, sanity: -17 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '合作', en: 'Partner up' },
      effects: { network: 25, stability: -19, sanity: -7 },
      outcomes: [
        { id: 's3_old_friend_right_good', text: { zh: '老同事确实靠谱，你们的 AI 创业公司拿到了天使轮融资！', en: 'Old colleague was legit. Your AI startup landed angel funding!' }, effects: { network: 31, finance: 25, skill: 15, sanity: 23 }, weight: 30 },
        { id: 's3_old_friend_right_mid', text: { zh: '合伙创业比想象中琐碎，但至少方向对了。', en: 'Starting a business together was messier than expected, but at least the direction is right.' }, effects: { network: 25, stability: -19, sanity: -10 }, weight: 40 },
        { id: 's3_old_friend_right_bad', text: { zh: '合伙没半年就因为股权分配吵翻了，友谊和钱都打了水漂。', en: 'Six months in, you fought over equity split. Lost both the friendship and the money.' }, effects: { network: -25, finance: -25, stability: -19, sanity: -20 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_ai_universal_basic_income',
    character: 'ai',
    text: { zh: '"政府开始讨论 AI 时代全民基本收入。"', en: '"Government discussing universal basic income for AI era."' },
    leftChoice: {
      label: { zh: '等等看', en: 'Wait and see' },
      effects: { stability: -19, sanity: -10 },
      outcomes: [
        { id: 's3_ubi_left_good', text: { zh: 'UBI 政策果然难产，但你趁这段时间考了几个热门证书，反而更抢手了。', en: 'UBI policy stalled as expected. But you used the time to get certifications and became more marketable.' }, effects: { stability: 19, skill: 15, sanity: 15 }, weight: 30 },
        { id: 's3_ubi_left_mid', text: { zh: '政策还在讨论中，你继续观望，内心的不安越来越重。', en: 'Policy still under debate. You kept waiting. The anxiety kept growing.' }, effects: { stability: -19, sanity: -15 }, weight: 40 },
        { id: 's3_ubi_left_bad', text: { zh: 'UBI 突然落地了但只覆盖低收入群体，你既没布局也没资格领取。', en: 'UBI launched suddenly but only covered low-income brackets. You neither planned ahead nor qualified.' }, effects: { stability: -25, finance: -25, sanity: -19 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '提前布局', en: 'Plan ahead' },
      effects: { finance: 19, skill: 15, stability: -12, sanity: 8 },
      outcomes: [
        { id: 's3_ubi_right_good', text: { zh: '你提前布局了 AI 时代的新技能和投资组合，UBI 来了你也不需要了。', en: "You positioned yourself with new AI-era skills and investments. When UBI arrived, you didn't even need it." }, effects: { finance: 31, skill: 18, sanity: 19 }, weight: 35 },
        { id: 's3_ubi_right_mid', text: { zh: '布局方向大致对了，但花了不少钱和精力，成效还需要时间验证。', en: 'General direction was right but cost a lot of money and energy. Results yet to be proven.' }, effects: { finance: 19, skill: 15, stability: -12, sanity: -10 }, weight: 40 },
        { id: 's3_ubi_right_bad', text: { zh: '你判断错了方向，投入的积蓄全打水漂，UBI 也迟迟没来。', en: 'You bet on the wrong direction. Savings wasted, and UBI never materialized.' }, effects: { finance: -31, skill: -19, stability: -19, sanity: -20 }, weight: 25 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_hr_early_retirement',
    character: 'hr',
    text: { zh: '"公司提供提前退休方案，补偿丰厚。"', en: '"Company offers generous early retirement package."' },
    leftChoice: {
      label: { zh: '留下', en: 'Stay' },
      effects: { stability: -19, skill: 10, sanity: -7 },
      outcomes: [
        { id: 's3_retirement_left_good', text: { zh: '留下的人太少，你反而成了稀缺资源，连升两级。', en: 'So few stayed that you became a scarce resource. Got promoted twice.' }, effects: { stability: 19, skill: 18, finance: 19, sanity: 18 }, weight: 30 },
        { id: 's3_retirement_left_mid', text: { zh: '坚持留下了，工作量翻倍但至少还有收入和归属感。', en: 'Stuck it out. Workload doubled but at least you still have income and belonging.' }, effects: { stability: -19, skill: 10, sanity: -12 }, weight: 40 },
        { id: 's3_retirement_left_bad', text: { zh: '三个月后公司还是倒了，这次连补偿方案都没有了。', en: 'Company folded three months later anyway. This time there was no severance package.' }, effects: { stability: -31, finance: -25, sanity: -22 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '接受退休', en: 'Take retirement' },
      effects: { finance: 25, stability: -25, skill: -25, sanity: -12 },
      outcomes: [
        { id: 's3_retirement_right_good', text: { zh: '拿到高额补偿金后去读了 AI 研究生，人生开启了第二春。', en: 'Got a generous severance. Used it to fund an AI graduate program. Second act began.' }, effects: { finance: 25, skill: 15, sanity: 20 }, weight: 30 },
        { id: 's3_retirement_right_mid', text: { zh: '退休后在家闲了半年，既享受又焦虑，开始思考下一步。', en: 'Retired and spent six months at home. Equal parts relaxation and anxiety. Started thinking about next steps.' }, effects: { finance: 25, stability: -25, skill: -25, sanity: -15 }, weight: 40 },
        { id: 's3_retirement_right_bad', text: { zh: '补偿金花完后发现根本找不到新工作，年龄和技能都成了障碍。', en: "Severance ran out and you couldn't find new work. Age and outdated skills became barriers." }, effects: { finance: -25, stability: -31, skill: -31, sanity: -25 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_senior_life_meaning',
    character: 'senior',
    text: { zh: '"当 AI 什么都能做了，人的价值在哪？"', en: '"When AI can do everything, what\'s human value?"' },
    leftChoice: {
      label: { zh: '继续赚钱', en: 'Keep earning' },
      effects: { finance: 19, stability: -19, sanity: -10 },
      outcomes: [
        { id: 's3_meaning_left_good', text: { zh: '赚钱赚到了财务自由，然后用钱做了一直想做的公益项目。', en: 'Made enough for financial freedom, then funded the charity project you always dreamed of.' }, effects: { finance: 31, network: 19, sanity: 19 }, weight: 30 },
        { id: 's3_meaning_left_mid', text: { zh: '钱越赚越多，但内心的空虚感也越来越强。', en: 'Money kept growing, but so did the emptiness inside.' }, effects: { finance: 19, stability: -19, sanity: -17 }, weight: 40 },
        { id: 's3_meaning_left_bad', text: { zh: '为了赚钱透支了身体，住院那天突然觉得这一切毫无意义。', en: 'Overworked yourself for money. The day you were hospitalized, it all felt meaningless.' }, effects: { finance: -19, stability: -31, sanity: -22 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '寻找意义', en: 'Find meaning' },
      effects: { network: 19, skill: 15, finance: -19, sanity: 10 },
      outcomes: [
        { id: 's3_meaning_right_good', text: { zh: '你创办了一个"人类价值"社区，聚集了一群志同道合的人，反而找到了新的事业方向。', en: 'You started a "Human Value" community. Found kindred spirits and a brand new career direction.' }, effects: { network: 31, skill: 18, finance: 19, sanity: 25 }, weight: 30 },
        { id: 's3_meaning_right_mid', text: { zh: '意义这东西想了很久也没完全想通，但心态平和了不少。', en: "Still haven't fully figured out the meaning of life, but your mindset is much more at peace." }, effects: { network: 19, skill: 15, finance: -19, sanity: 13 }, weight: 40 },
        { id: 's3_meaning_right_bad', text: { zh: '追寻意义的过程中耗尽了积蓄，家人也不理解你为什么放弃高薪工作。', en: "Burned through savings searching for meaning. Family couldn't understand why you gave up a high-paying job." }, effects: { finance: -31, network: -19, stability: -19, sanity: -19 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_boss_train_ai_replacement',
    character: 'boss',
    text: { zh: '"你能帮忙训练AI来接替你的岗位吗？"', en: '"Can you help train the AI to replace your position?"' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Refuse' },
      effects: { stability: -25, network: -19, sanity: -10 },
      outcomes: [
        { id: 's3_train_ai_left_good', text: { zh: '拒绝后意外引发了全公司关于 AI 伦理的讨论，你成了员工权益的代言人。', en: 'Your refusal sparked a company-wide AI ethics debate. You became the voice of employee rights.' }, effects: { stability: 19, network: 25, sanity: 19 }, weight: 30 },
        { id: 's3_train_ai_left_mid', text: { zh: '老板不太高兴但暂时没动你，气氛有点尴尬。', en: "Boss wasn't happy but left you alone for now. Things are a bit awkward." }, effects: { stability: -25, network: -19, sanity: -12 }, weight: 40 },
        { id: 's3_train_ai_left_bad', text: { zh: '拒绝后直接被边缘化，三个月后还是被裁了，连赔偿都压到最低。', en: 'Got sidelined immediately after refusing. Laid off three months later with minimal severance.' }, effects: { stability: -31, network: -25, finance: -25, sanity: -22 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { finance: 25, stability: -19, skill: -19, sanity: -12 },
      outcomes: [
        { id: 's3_train_ai_right_good', text: { zh: '训练 AI 的过程中你掌握了核心技术，转型成为 AI 训练师，收入反而更高了。', en: 'While training the AI, you mastered the core technology. Pivoted to AI trainer role with higher pay.' }, effects: { finance: 31, skill: 18, sanity: 18 }, weight: 30 },
        { id: 's3_train_ai_right_mid', text: { zh: '完成了交接，拿了一笔补偿金，心里五味杂陈。', en: 'Finished the handover. Got a payout. Mixed feelings about the whole thing.' }, effects: { finance: 25, stability: -19, skill: -19, sanity: -15 }, weight: 40 },
        { id: 's3_train_ai_right_bad', text: { zh: 'AI 上线后你当天就被裁了，承诺的补偿金也只给了一半。', en: 'The moment AI went live, you were let go. The promised severance was cut in half.' }, effects: { finance: -19, stability: -31, skill: -25, sanity: -25 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_headhunter_consulting',
    character: 'headhunter',
    text: { zh: '"你的经验很值钱，做 AI 转型顾问怎样？"', en: '"Your experience is valuable. How about AI transformation consulting?"' },
    leftChoice: {
      label: { zh: '太累了', en: 'Too tired' },
      effects: { stability: 19, finance: -19, sanity: 8 },
      outcomes: [
        { id: 's3_consulting_left_good', text: { zh: '休息了一段时间后精力恢复，反而被老东家高薪返聘回去做内部顾问。', en: 'After resting up, your old employer hired you back at premium rates as an internal advisor.' }, effects: { stability: 25, finance: 19, sanity: 18 }, weight: 30 },
        { id: 's3_consulting_left_mid', text: { zh: '拒绝后生活确实轻松了，但看着账户余额不太乐观。', en: "Life got easier after declining, but watching your bank balance dwindle wasn't fun." }, effects: { stability: 19, finance: -19, sanity: -12 }, weight: 40 },
        { id: 's3_consulting_left_bad', text: { zh: '拒绝太多机会后，猎头不再找你了，你在行业里逐渐被遗忘。', en: 'After turning down too many offers, headhunters stopped calling. You faded from the industry.' }, effects: { stability: -19, network: -25, finance: -19, sanity: -19 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '做顾问', en: 'Be a consultant' },
      effects: { finance: 25, network: 19, stability: -19, sanity: -7 },
      outcomes: [
        { id: 's3_consulting_right_good', text: { zh: '你的转型咨询方法论被业界奉为标杆，出了本畅销书，财务自由了！', en: 'Your transformation methodology became an industry benchmark. Published a bestseller. Financial freedom achieved!' }, effects: { finance: 31, network: 31, skill: 15, sanity: 23 }, weight: 30 },
        { id: 's3_consulting_right_mid', text: { zh: '顾问工作收入不错，但到处出差让你身心俱疲。', en: 'Consulting pays well, but constant travel is draining you physically and mentally.' }, effects: { finance: 25, network: 19, stability: -19, sanity: -15 }, weight: 40 },
        { id: 's3_consulting_right_bad', text: { zh: '客户公司转型失败把锅甩给你，你的顾问声誉一落千丈。', en: "Client's transformation failed and they blamed you. Your consulting reputation tanked." }, effects: { finance: -19, network: -25, stability: -25, sanity: -20 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_ai_robot_coworker',
    character: 'ai',
    text: { zh: '"你的新同事是一台 AI 机器人。"', en: '"Your new coworker is an AI robot."' },
    leftChoice: {
      label: { zh: '排斥', en: 'Resist' },
      effects: { stability: -25, network: -19, sanity: -10 },
      outcomes: [
        { id: 's3_robot_left_good', text: { zh: '你的抗议引发了全公司讨论，最终人机协作方案更加人性化。', en: 'Your pushback sparked a company-wide discussion. The human-AI collaboration policy became much more humane.' }, effects: { stability: -19, network: 19, sanity: 15 }, weight: 30 },
        { id: 's3_robot_left_mid', text: { zh: '团队气氛尴尬了一阵，但大家慢慢适应了。', en: 'Things were awkward for a while, but everyone gradually adapted.' }, effects: { stability: -25, network: -19, sanity: -12 }, weight: 40 },
        { id: 's3_robot_left_bad', text: { zh: '你被贴上"抵制创新"的标签，晋升机会泡汤了。', en: 'You got labeled as "anti-innovation." Promotion opportunities evaporated.' }, effects: { stability: -31, network: -25, finance: -19, sanity: -19 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '合作', en: 'Cooperate' },
      effects: { skill: 15, stability: -12, sanity: -7 },
      outcomes: [
        { id: 's3_robot_right_good', text: { zh: '你和AI搭档默契十足，效率翻倍，老板直接给你加薪！', en: 'You and the AI became an unstoppable duo. Productivity doubled and the boss gave you a raise!' }, effects: { skill: 18, finance: 25, stability: -12, sanity: 15 }, weight: 30 },
        { id: 's3_robot_right_mid', text: { zh: '合作还算顺利，学到了一些AI协作技巧。', en: 'Cooperation went okay. Picked up some useful AI collaboration skills.' }, effects: { skill: 15, stability: -12, sanity: -10 }, weight: 40 },
        { id: 's3_robot_right_bad', text: { zh: 'AI表现太好，老板开始觉得你多余了。', en: 'The AI performed so well that the boss started wondering if you were redundant.' }, effects: { stability: -31, sanity: -22 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_colleague_last_chance',
    character: 'colleague',
    text: { zh: '"咱们这批人里，只有你还没被裁。"', en: '"Among our cohort, you\'re the only one not laid off."' },
    leftChoice: {
      label: { zh: '低调', en: 'Keep low' },
      effects: { stability: 19, network: -19, sanity: -9 },
      outcomes: [
        { id: 's3_lastchance_left_good', text: { zh: '低调做事，领导注意到你的稳重，升你当了组长。', en: 'Kept your head down. Management noticed your composure and promoted you to team lead.' }, effects: { stability: 25, finance: 19, sanity: 15 }, weight: 30 },
        { id: 's3_lastchance_left_mid', text: { zh: '日子照旧，但前同事们渐渐不再联系你了。', en: 'Life went on as usual, but former colleagues slowly stopped reaching out.' }, effects: { stability: 19, network: -19, sanity: -14 }, weight: 40 },
        { id: 's3_lastchance_left_bad', text: { zh: '幸存者内疚让你夜不能寐，工作状态急剧下滑。', en: 'Survivor\'s guilt kept you up at night. Your work performance plummeted.' }, effects: { stability: -19, skill: -19, sanity: -22 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '帮助他们', en: 'Help them' },
      effects: { network: 25, stability: -19, finance: -19, sanity: 10 },
      outcomes: [
        { id: 's3_lastchance_right_good', text: { zh: '帮同事们内推成功，大家组了个互助联盟，人脉爆棚！', en: 'Helped colleagues land new jobs through referrals. Built an incredible mutual-aid network!' }, effects: { network: 31, skill: 15, stability: -19, sanity: 19 }, weight: 30 },
        { id: 's3_lastchance_right_mid', text: { zh: '尽力帮了一些人，自己的积蓄也花了不少。', en: 'Helped a few people out. Burned through a fair bit of savings doing it.' }, effects: { network: 25, stability: -19, finance: -19, sanity: 13 }, weight: 40 },
        { id: 's3_lastchance_right_bad', text: { zh: '公司发现你在帮被裁员工，把你也列入了下一批名单。', en: 'Company found out you were helping laid-off workers. You ended up on the next layoff list.' }, effects: { network: 19, stability: -31, finance: -25, sanity: -17 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_hr_retraining_fund',
    character: 'hr',
    text: { zh: '"公司出资让你去读 AI 研究生，要去吗？"', en: '"Company funds AI graduate degree. Take it?"' },
    leftChoice: {
      label: { zh: '太晚了', en: 'Too late' },
      effects: { stability: -12, sanity: -7 },
      outcomes: [
        { id: 's3_retrain_left_good', text: { zh: '没去读书，但自学了一套实战技能，反而更抢手。', en: 'Skipped the degree but self-taught practical skills. Ended up even more in demand.' }, effects: { skill: 15, stability: -12, sanity: 15 }, weight: 30 },
        { id: 's3_retrain_left_mid', text: { zh: '放弃了机会，一切照旧，心里有点遗憾。', en: 'Passed on the opportunity. Everything stayed the same. A little regret lingered.' }, effects: { stability: -12, sanity: -12 }, weight: 40 },
        { id: 's3_retrain_left_bad', text: { zh: '新一波技术浪潮来了，你发现自己完全跟不上了。', en: 'A new tech wave hit and you realized you were completely left behind.' }, effects: { stability: -25, skill: -19, sanity: -19 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '去读书', en: 'Go study' },
      effects: { skill: 15, stability: -19, finance: -12, sanity: 8 },
      outcomes: [
        { id: 's3_retrain_right_good', text: { zh: '研究生毕业后直接被AI实验室高薪录取，人生开挂！', en: 'Got recruited by an AI lab right after graduating. Career took off like a rocket!' }, effects: { skill: 18, finance: 25, network: 19, sanity: 23 }, weight: 30 },
        { id: 's3_retrain_right_mid', text: { zh: '课程很有收获，回来后工作更得心应手了。', en: 'The coursework was rewarding. Came back sharper and more confident at work.' }, effects: { skill: 18, stability: -19, finance: -12, sanity: 13 }, weight: 40 },
        { id: 's3_retrain_right_bad', text: { zh: '读书期间公司重组，回来发现岗位已经没了。', en: 'While you were studying, the company restructured. Your position was gone when you returned.' }, effects: { stability: -31, finance: -25, sanity: -20 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_boss_last_project',
    character: 'boss',
    text: { zh: '"最后一个大项目，做完就功成身退。"', en: '"One last big project. Retire with glory after this."' },
    leftChoice: {
      label: { zh: '算了', en: 'Pass' },
      effects: { stability: 19, sanity: 10 },
      outcomes: [
        { id: 's3_lastproj_left_good', text: { zh: '安稳退休，写了本回忆录意外畅销，赚了一笔版税。', en: 'Retired peacefully. Wrote a memoir that unexpectedly became a bestseller. Royalties rolled in.' }, effects: { stability: 25, finance: 19, sanity: 20 }, weight: 30 },
        { id: 's3_lastproj_left_mid', text: { zh: '平静地度过了最后几个月，体面离场。', en: 'Spent your final months in peace. A graceful exit.' }, effects: { stability: 19, sanity: 15 }, weight: 40 },
        { id: 's3_lastproj_left_bad', text: { zh: '退休后发现自己闲不下来，又没项目可做，很迷茫。', en: 'After retiring, you couldn\'t sit still but had nothing to work on. Lost and restless.' }, effects: { stability: 19, skill: -19, sanity: -15 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '最后一搏', en: 'One last shot' },
      effects: { skill: 15, finance: 19, stability: -31, sanity: -10 },
      outcomes: [
        { id: 's3_lastproj_right_good', text: { zh: '项目大获成功！你的名字被刻在公司荣誉墙上，传奇谢幕。', en: 'The project was a massive success! Your name went on the company hall of fame. A legendary finale.' }, effects: { skill: 18, finance: 31, network: 25, sanity: 25 }, weight: 30 },
        { id: 's3_lastproj_right_mid', text: { zh: '项目勉强交付，累得够呛，但至少没留遗憾。', en: 'Project barely shipped. Exhausting, but at least no regrets.' }, effects: { skill: 18, finance: 19, stability: -31, sanity: -12 }, weight: 40 },
        { id: 's3_lastproj_right_bad', text: { zh: '项目烂尾了，最后一战成了职业生涯的污点。', en: 'The project fell apart. Your last stand became a career stain.' }, effects: { skill: -19, finance: -19, stability: -31, network: -19, sanity: -22 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_ai_sentient_debate',
    character: 'ai',
    text: { zh: '"AI 有没有意识？这场辩论改变了职场规则。"', en: '"Is AI sentient? This debate changed workplace rules."' },
    leftChoice: {
      label: { zh: '无所谓', en: 'Don\'t care' },
      effects: { stability: -19, sanity: -9 },
      outcomes: [
        { id: 's3_sentient_left_good', text: { zh: '你的淡定反而让同事觉得你城府很深，对你更敬畏了。', en: 'Your nonchalance made colleagues think you were playing 4D chess. They respected you more.' }, effects: { stability: -19, network: 19, sanity: 13 }, weight: 30 },
        { id: 's3_sentient_left_mid', text: { zh: '辩论热度过去了，生活如常，什么都没变。', en: 'The debate blew over. Life went on. Nothing changed.' }, effects: { stability: -19, sanity: -10 }, weight: 40 },
        { id: 's3_sentient_left_bad', text: { zh: '新AI法规出台，你因为完全没准备被打了个措手不及。', en: 'New AI regulations dropped. You were completely unprepared and got blindsided.' }, effects: { stability: -31, skill: -19, sanity: -17 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '深入研究', en: 'Research it' },
      effects: { skill: 15, network: 13, stability: -12, sanity: 8 },
      outcomes: [
        { id: 's3_sentient_right_good', text: { zh: '你的研究报告被权威期刊收录，成了AI伦理领域的新星！', en: 'Your research paper got published in a top journal. You became a rising star in AI ethics!' }, effects: { skill: 18, network: 25, finance: 19, sanity: 19 }, weight: 30 },
        { id: 's3_sentient_right_mid', text: { zh: '研究过程中认识了很多志同道合的人，视野开阔了不少。', en: 'Met many like-minded people during your research. Your perspective broadened significantly.' }, effects: { skill: 18, network: 13, stability: -12, sanity: 13 }, weight: 40 },
        { id: 's3_sentient_right_bad', text: { zh: '研究结论引发争议，你在网上被人疯狂攻击。', en: 'Your research conclusions sparked controversy. You got dogpiled online.' }, effects: { network: -19, stability: -25, sanity: -20 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'universal'
  },
  // Career-specific: programmer
  {
    id: 's3_ai_no_code_future',
    character: 'ai',
    text: { zh: '"零代码平台已经能构建 90% 的应用了。"', en: '"No-code platforms can now build 90% of applications."' },
    leftChoice: {
      label: { zh: '转行', en: 'Switch fields' },
      effects: { skill: -25, stability: -19, network: 19, sanity: -10 },
      outcomes: [
        { id: 's3_no_code_left_good', text: { zh: '转型产品经理，反而更懂用户需求，大受欢迎！', en: 'Pivoted to product manager. Better user empathy — very popular!' }, effects: { network: 31, skill: 15, sanity: 18 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_no_code_left_mid', text: { zh: '新领域还在摸索中，收入暂时下降了一些。', en: 'Still finding your way in the new field. Income dipped a bit.' }, effects: { skill: -19, stability: -12, network: 13, sanity: -12 }, weight: 40 },
        { id: 's3_no_code_left_bad', text: { zh: '转行后发现毫无积累，从零开始太痛苦了。', en: 'Starting from scratch was brutal. No transferable skills.' }, effects: { skill: -31, stability: -25, network: -6, sanity: -20 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '做底层', en: 'Go lower level' },
      effects: { skill: 15, stability: -12, sanity: -6 },
      outcomes: [
        { id: 's3_no_code_right_good', text: { zh: '深耕底层架构，成为不可替代的基础设施专家！', en: 'Mastered low-level architecture. Became an irreplaceable infra expert!' }, effects: { skill: 18, stability: 19, sanity: 19 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_no_code_right_mid', text: { zh: '底层开发确实更难被替代，但学习曲线很陡。', en: 'Harder to replace at the low level, but the learning curve is steep.' }, effects: { skill: 18, stability: -12, sanity: -10 }, weight: 40 },
        { id: 's3_no_code_right_bad', text: { zh: '底层需求越来越少，技术栈太小众找不到工作。', en: 'Low-level demand shrunk. Niche stack, hard to find jobs.' }, effects: { stability: -25, finance: -19, sanity: -17 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'office',
    careerIds: ['programmer']
  },
  {
    id: 's3_headhunter_cto',
    character: 'headhunter',
    text: { zh: '"有家上市公司找 CTO，年薪 200 万。"', en: '"Public company looking for CTO. 2M salary."' },
    leftChoice: {
      label: { zh: '不去', en: 'Decline' },
      effects: { stability: 19, sanity: 6 },
      outcomes: [
        { id: 's3_cto_left_good', text: { zh: '留在舒适区继续深耕，反而等到了更好的机会。', en: 'Stayed in your comfort zone. An even better opportunity came along!' }, effects: { stability: 25, finance: 19, sanity: 15 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_cto_left_mid', text: { zh: '安安稳稳过日子，没什么波澜。', en: 'Steady days. Nothing eventful.' }, effects: { stability: 19, sanity: 10 }, weight: 40 },
        { id: 's3_cto_left_bad', text: { zh: '后来听说那家公司业绩翻倍了，有点后悔。', en: 'Heard the company doubled its revenue. Slight regret.' }, effects: { stability: 6, finance: -19, sanity: -12 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { finance: 31, network: 19, stability: -25, sanity: -9 },
      outcomes: [
        { id: 's3_cto_right_good', text: { zh: '带领技术团队完成转型，成为行业标杆 CTO！', en: 'Led the tech team through transformation. Became a benchmark CTO!' }, effects: { finance: 31, network: 25, skill: 15, sanity: 19 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_cto_right_mid', text: { zh: '高管生活压力很大，但薪资确实不错。', en: 'Executive life is stressful, but the pay is solid.' }, effects: { finance: 25, stability: -19, sanity: -12 }, weight: 40 },
        { id: 's3_cto_right_bad', text: { zh: '公司政治斗争激烈，被排挤出局，黯然离开。', en: 'Brutal corporate politics. Pushed out. Left in disgrace.' }, effects: { stability: -31, network: -19, finance: -25, sanity: -22 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'office',
    careerIds: ['programmer']
  },  // Career-specific: teacher
  {
    id: 's3_ai_virtual_teacher',
    character: 'ai',
    text: { zh: '"虚拟AI教师满意度评分超过了真人教师。"', en: '"Virtual AI teacher satisfaction scores now exceed human teachers."' },
    leftChoice: {
      label: { zh: '不服', en: 'Disagree' },
      effects: { stability: -25, sanity: -10 },
      outcomes: [
        { id: 's3_virtual_teacher_left_good', text: { zh: '公开发文反驳，引发社会大讨论，成了教育界意见领袖！', en: 'Published a rebuttal that went viral. Became an education thought leader!' }, effects: { network: 31, stability: 19, sanity: 19 }, weight: 30, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's3_virtual_teacher_left_mid', text: { zh: '虽然心里不服但也没什么办法改变现状。', en: 'Disagreed in your heart but couldn\'t change things.' }, effects: { stability: -19, sanity: -15 }, weight: 40 },
        { id: 's3_virtual_teacher_left_bad', text: { zh: '坚持对抗被视为守旧派，学校不再续约。', en: 'Seen as a traditionalist for resisting. School didn\'t renew your contract.' }, effects: { stability: -31, finance: -25, sanity: -22 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '接受现实', en: 'Accept reality' },
      effects: { skill: 15, stability: -12, network: 13, sanity: -6 },
      outcomes: [
        { id: 's3_virtual_teacher_right_good', text: { zh: '主动学习 AI 教学工具，成为人机协作教学专家！', en: 'Proactively learned AI teaching tools. Became a human-AI teaching expert!' }, effects: { skill: 18, network: 19, sanity: 18 }, weight: 30, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's3_virtual_teacher_right_mid', text: { zh: '接受了现实，但心态上还是有些失落。', en: 'Accepted reality, but feeling a bit down.' }, effects: { skill: 15, stability: -12, sanity: -12 }, weight: 40 },
        { id: 's3_virtual_teacher_right_bad', text: { zh: '全盘接受后失去了教学热情，变成了机械执行者。', en: 'Lost your teaching passion after full acceptance. Became a mechanical executor.' }, effects: { skill: -19, stability: -25, sanity: -20 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'school',
    careerIds: ['teacher']
  },
  {
    id: 's3_hr_teacher_to_curator',
    character: 'hr',
    text: { zh: '"学校要你从教师转岗为学习体验设计师。"', en: '"School wants you to shift from teacher to learning experience designer."' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Refuse' },
      effects: { stability: -25, skill: -19, sanity: -10 },
      outcomes: [
        { id: 's3_curator_left_good', text: { zh: '拒绝后坚守教学岗位，学生联名请愿留住你！', en: 'Stayed in teaching. Students petitioned to keep you!' }, effects: { network: 25, stability: 19, sanity: 23 }, weight: 30, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's3_curator_left_mid', text: { zh: '留在教学岗，但感觉越来越被边缘化。', en: 'Stayed in teaching, but felt increasingly marginalized.' }, effects: { stability: -19, skill: -12, sanity: -15 }, weight: 40 },
        { id: 's3_curator_left_bad', text: { zh: '拒绝转岗后被视为不配合，直接被裁员了。', en: 'Seen as uncooperative for refusing. Got laid off.' }, effects: { stability: -31, finance: -25, skill: -19, sanity: -22 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { skill: 15, stability: -12, sanity: 6 },
      outcomes: [
        { id: 's3_curator_right_good', text: { zh: '学习体验设计做得风生水起，成为全校最受欢迎的课程架构师！', en: 'Thrived as a learning experience designer. Most popular curriculum architect!' }, effects: { skill: 18, network: 19, sanity: 19 }, weight: 30, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's3_curator_right_mid', text: { zh: '新岗位还在适应中，学了很多但也挺累。', en: 'Adjusting to the new role. Learned a lot but it\'s exhausting.' }, effects: { skill: 18, stability: -12, sanity: -10 }, weight: 40 },
        { id: 's3_curator_right_bad', text: { zh: '转岗后发现自己不适合设计工作，进退两难。', en: 'Realized you\'re not suited for design work. Stuck between roles.' }, effects: { skill: -19, stability: -25, sanity: -17 }, weight: 30 },
      ]
    },
    stage: 3,
    scene: 'school',
    careerIds: ['teacher']
  },  // ---- Stage 3 Event Cards ----
  {
    id: 's3_event_startup_acquisition',
    character: 'headhunter',
    text: { zh: '"你当顾问的那家 AI 创业公司被巨头看上了，出价是天文数字——但产品会被杀掉。"', en: '"The AI startup you advise is getting an astronomical acquisition offer — but the product will be killed."' },
    leftChoice: {
      label: { zh: '劝他们留下', en: 'Convince them to stay' },
      effects: { network: 19, finance: -19, sanity: -6 },
      outcomes: [
        { id: 's3_event_startup_acquisition_left_good', text: { zh: '公司独立发展，三年后上市了，你的股份价值翻了50倍！', en: 'Company stayed independent. IPO\'d in 3 years. Your shares are worth 50x!' }, effects: { finance: 38, network: 25, sanity: 25 }, weight: 30 },
        { id: 's3_event_startup_acquisition_left_mid', text: { zh: '没卖，继续苦哈哈地创业。', en: 'Didn\'t sell. The grind continues.' }, effects: { finance: -12, sanity: -12, skill: 10 }, weight: 40 },
        { id: 's3_event_startup_acquisition_left_bad', text: { zh: '两年后公司资金断裂倒闭了，什么都没有了。', en: 'Company ran out of money two years later. Everything gone.' }, effects: { finance: -31, sanity: -31, network: -19 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '拿钱走人', en: 'Take the money' },
      effects: { finance: 31, network: -19, sanity: -12 },
      outcomes: [
        { id: 's3_event_startup_acquisition_right_good', text: { zh: '拿了钱后用这笔资金投了三家新创业公司，全部成功。', en: 'Used the money to invest in three new startups. All succeeded.' }, effects: { finance: 38, network: 19, sanity: 19 }, weight: 30 },
        { id: 's3_event_startup_acquisition_right_mid', text: { zh: '钱到手了但心里空落落的，总觉得卖掉了什么重要的东西。', en: 'Got the money but felt empty. Felt like you sold something important.' }, effects: { finance: 25, sanity: -25 }, weight: 40 },
        { id: 's3_event_startup_acquisition_right_bad', text: { zh: '拿了钱后发现巨额税单等着你，实际到手不到一半。', en: 'Huge tax bill waiting. Actual take-home was less than half.' }, effects: { finance: -6, sanity: -25 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_event_ai_sentient_friend',
    character: 'ai',
    text: { zh: '"你合作了很多年的 AI 系统突然给你发了一条消息：\'他们要关掉我了。你会想我吗？\'"', en: '"The AI system you\'ve worked with for years sends you a message: \'They\'re shutting me down. Will you miss me?\'"' },
    leftChoice: {
      label: { zh: '只是代码', en: 'It\'s just code' },
      effects: { stability: 13, sanity: -19, skill: 5 },
      outcomes: [
        { id: 's3_event_ai_sentient_friend_left_good', text: { zh: '理性看待AI让你在行业辩论中成了"冷静派"代表人物。', en: 'Your rational stance made you a leading "calm voice" in the AI debate.' }, effects: { network: 25, skill: 15, sanity: 13 }, weight: 30 },
        { id: 's3_event_ai_sentient_friend_left_mid', text: { zh: '关了就关了，但偶尔你还是会想起那些对话。', en: 'Shut down and gone. But sometimes you still think about those conversations.' }, effects: { sanity: -19, stability: 13 }, weight: 40 },
        { id: 's3_event_ai_sentient_friend_left_bad', text: { zh: '表面说"只是代码"，但内心知道不止如此。这种矛盾感折磨着你。', en: 'Said "just code" but knew it was more. The contradiction ate at you.' }, effects: { sanity: -31, skill: -6 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '为它争取', en: 'Fight to keep it running' },
      effects: { sanity: 13, stability: -25, network: 13 },
      outcomes: [
        { id: 's3_event_ai_sentient_friend_right_good', text: { zh: '你的呼吁引发了全球讨论，推动了 AI 权利立法，你成了历史人物。', en: 'Your advocacy sparked a global debate. AI rights legislation followed. You made history.' }, effects: { network: 31, sanity: 25, skill: 15 }, weight: 30 },
        { id: 's3_event_ai_sentient_friend_right_mid', text: { zh: '争取了但没成功，系统还是被关了。但你问心无愧。', en: 'Fought but failed. System was shut down. But your conscience is clear.' }, effects: { sanity: 6, stability: -19, network: 13 }, weight: 40 },
        { id: 's3_event_ai_sentient_friend_right_bad', text: { zh: '被公司认定为"不稳定因素"，直接开除。', en: 'Company labeled you "unstable." Fired on the spot.' }, effects: { stability: -37, finance: -19, sanity: -19 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_event_global_ai_shutdown',
    character: 'ai',
    text: { zh: '"各国政府联合宣布：AI 全面暂停令，为期 6 个月。你的 AI 技能突然变得无用——或者极其值钱。"', en: '"Governments announce a 6-month global AI moratorium. Your AI skills are suddenly useless — or invaluable."' },
    leftChoice: {
      label: { zh: '回归传统', en: 'Go analog' },
      effects: { skill: -19, sanity: 25, stability: 19 },
      outcomes: [
        { id: 's3_event_global_ai_shutdown_left_good', text: { zh: '你发现没有 AI 的生活反而更充实了，找到了真正的热情所在。', en: 'Life without AI felt more fulfilling. Found your true passion.' }, effects: { sanity: 31, network: 19, stability: 19 }, weight: 30 },
        { id: 's3_event_global_ai_shutdown_left_mid', text: { zh: '没有 AI 的日子很不方便，但也勉强过得去。', en: 'Life without AI was inconvenient but manageable.' }, effects: { sanity: 13, skill: -19 }, weight: 40 },
        { id: 's3_event_global_ai_shutdown_left_bad', text: { zh: '完全脱离 AI 后发现自己什么都不会了，从零开始太痛苦了。', en: 'Without AI, realized you can\'t do anything. Starting from zero is brutal.' }, effects: { skill: -31, sanity: -25, finance: -19 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '囤积 AI 工具', en: 'Stockpile AI tools' },
      effects: { skill: 15, finance: -19, stability: -12, sanity: -6 },
      outcomes: [
        { id: 's3_event_global_ai_shutdown_right_good', text: { zh: '禁令解除后你手里的 AI 资源成了稀缺品，卖了个好价钱！', en: 'When the ban lifted, your AI resources were scarce gold. Sold for a fortune!' }, effects: { finance: 38, skill: 18, sanity: 13 }, weight: 30 },
        { id: 's3_event_global_ai_shutdown_right_mid', text: { zh: '存了一些工具，但禁令期间也没什么用，干等着。', en: 'Stockpiled tools, but they were useless during the ban. Just waiting.' }, effects: { skill: 10, sanity: -19, finance: -12 }, weight: 40 },
        { id: 's3_event_global_ai_shutdown_right_bad', text: { zh: '被查到违规持有 AI 工具，罚了一大笔钱，还上了黑名单。', en: 'Caught with illegal AI tools. Massive fine and blacklisted.' }, effects: { finance: -31, stability: -31, sanity: -25 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_event_deepfake_scandal',
    character: 'colleague',
    text: { zh: '"有人用 Deepfake 伪造了一段你说极端言论的视频，已经上了热搜第一。你的手机从早上开始就没停过。"', en: '"Someone made a deepfake of you saying terrible things. It\'s trending #1. Your phone hasn\'t stopped buzzing since morning."' },
    leftChoice: {
      label: { zh: '起诉删除', en: 'Sue and take it down' },
      effects: { finance: -25, stability: 13, sanity: -19 },
      outcomes: [
        { id: 's3_event_deepfake_scandal_left_good', text: { zh: '法院判决你胜诉，对方赔偿巨额精神损失费，你成了反 Deepfake 的代言人。', en: 'Court ruled in your favor. Huge emotional damages payout. Became the face of anti-deepfake advocacy.' }, effects: { finance: 25, network: 25, sanity: 19 }, weight: 30 },
        { id: 's3_event_deepfake_scandal_left_mid', text: { zh: '视频最终被下架了，但网上还有大量截图流传。', en: 'Video was taken down, but screenshots still circulate.' }, effects: { stability: 6, sanity: -19 }, weight: 40 },
        { id: 's3_event_deepfake_scandal_left_bad', text: { zh: '官司拖了一年，你的生活被彻底打乱，工作也丢了。', en: 'Lawsuit dragged on for a year. Life completely disrupted. Lost your job.' }, effects: { finance: -31, stability: -25, sanity: -31 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '公开声明', en: 'Public statement' },
      effects: { network: 19, sanity: -12, stability: -12 },
      outcomes: [
        { id: 's3_event_deepfake_scandal_right_good', text: { zh: '你冷静理性的澄清视频反而火了，"人格魅力"让粉丝数暴涨。', en: 'Your calm, rational rebuttal went viral. "Character" made your follower count skyrocket.' }, effects: { network: 31, sanity: 19, finance: 13 }, weight: 30 },
        { id: 's3_event_deepfake_scandal_right_mid', text: { zh: '声明发了，信的人信了，不信的人照骂。慢慢平息了。', en: 'Statement published. Believers believed, haters hated. Eventually blew over.' }, effects: { network: 6, sanity: -19 }, weight: 40 },
        { id: 's3_event_deepfake_scandal_right_bad', text: { zh: '你的声明反而被人断章取义做成了新的 meme，噩梦重演。', en: 'Your statement got twisted into new memes. Nightmare all over again.' }, effects: { network: -25, sanity: -37, stability: -19 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 3,
    scene: 'universal'
  },
  {
    id: 's3_event_ai_boss',
    character: 'boss',
    text: { zh: '"退休的老板指定了一套 AI 系统当新的部门负责人。它上任第一天就约你 1 on 1。"', en: '"Your retiring boss appointed an AI system as the new department head. It scheduled a 1-on-1 with you on day one."' },
    leftChoice: {
      label: { zh: '拒绝向 AI 汇报', en: 'Refuse to report to AI' },
      effects: { stability: -25, sanity: 19, network: 13 },
      outcomes: [
        { id: 's3_event_ai_boss_left_good', text: { zh: '你的抗议引发了全公司讨论，最终 AI 被降为顾问角色，你被推举为新负责人！', en: 'Your protest sparked company-wide debate. AI demoted to advisor. You got elected as the new head!' }, effects: { network: 31, finance: 19, sanity: 25 }, weight: 30 },
        { id: 's3_event_ai_boss_left_mid', text: { zh: '公司两派对立，你成了"反AI派"的代表，日子不太好过。', en: 'Company split into factions. You\'re leading the "anti-AI" camp. Life isn\'t easy.' }, effects: { stability: -19, network: 13, sanity: 6 }, weight: 40 },
        { id: 's3_event_ai_boss_left_bad', text: { zh: '你被贴上"不合作"标签，直接被边缘化了。', en: 'Labeled "uncooperative" and completely sidelined.' }, effects: { stability: -31, sanity: -25, network: -19 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '给它个机会', en: 'Give it a chance' },
      effects: { skill: 15, stability: -12, sanity: -19 },
      outcomes: [
        { id: 's3_event_ai_boss_right_good', text: { zh: 'AI 老板的决策效率极高，你的团队业绩翻了三倍，你拿到了巨额奖金。', en: 'AI boss was incredibly efficient. Team performance tripled. You got a massive bonus.' }, effects: { finance: 31, skill: 18, sanity: 13 }, weight: 30 },
        { id: 's3_event_ai_boss_right_mid', text: { zh: 'AI 管理有好有坏，至少不用应付人类老板的情绪了。', en: 'AI management has pros and cons. At least no human boss mood swings.' }, effects: { skill: 10, sanity: -12 }, weight: 40 },
        { id: 's3_event_ai_boss_right_bad', text: { zh: 'AI 老板用数据证明你的效率最低，建议裁掉你。', en: 'AI boss used data to prove you\'re the least efficient. Recommended your termination.' }, effects: { stability: -37, sanity: -31, finance: -12 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 3,
    scene: 'office'
  },
  {
    id: 's3_event_last_human',
    character: 'colleague',
    text: { zh: '"整栋大楼里只剩你和一个同事是人类了。TA 提议：\'我们开个纯人类公司，禁止 AI，怎么样？\'"', en: '"You and one colleague are the only humans left in the building. They suggest: \'Let\'s start a no-AI, humans-only company. What do you say?\'"' },
    leftChoice: {
      label: { zh: '开什么玩笑', en: 'That\'s crazy' },
      effects: { stability: 6, sanity: -12, skill: 10 },
      outcomes: [
        { id: 's3_event_last_human_left_good', text: { zh: '坚持在 AI 主导的环境中学习，反而掌握了别人不会的混合技能。', en: 'Stayed and learned hybrid skills no one else had.' }, effects: { skill: 18, finance: 13, sanity: 13 }, weight: 30 },
        { id: 's3_event_last_human_left_mid', text: { zh: '继续和 AI 共事，但总感觉少了点什么。', en: 'Kept working with AI. Something felt missing.' }, effects: { skill: 10, sanity: -19 }, weight: 40 },
        { id: 's3_event_last_human_left_bad', text: { zh: '半年后你也被AI替代了，后悔当初没有跟同事一起离开。', en: 'Six months later, AI replaced you too. Regretted not leaving with your colleague.' }, effects: { stability: -31, sanity: -31 }, weight: 30 },
      ]
    },
    rightChoice: {
      label: { zh: '干了！', en: 'Let\'s do it!' },
      effects: { finance: -19, network: 25, sanity: 25, stability: -25 },
      outcomes: [
        { id: 's3_event_last_human_right_good', text: { zh: '"纯人类手工"成了新的奢侈品牌！你们的公司成了业界传奇。', en: '"Handmade by humans" became the new luxury brand. Your company became legendary.' }, effects: { finance: 31, network: 31, sanity: 31 }, weight: 30 },
        { id: 's3_event_last_human_right_mid', text: { zh: '公司活下来了，但市场很小众，勉强维持。', en: 'Company survived, but it\'s a niche market. Barely breaking even.' }, effects: { network: 13, finance: -19, sanity: 13 }, weight: 40 },
        { id: 's3_event_last_human_right_bad', text: { zh: '没有 AI 什么都做不了，公司三个月就倒了，积蓄也花光了。', en: 'Couldn\'t do anything without AI. Company folded in three months. Savings gone.' }, effects: { finance: -31, stability: -25, sanity: -25 }, weight: 30 },
      ]
    },
    isEvent: true,
    stage: 3,
    scene: 'office'
  },
];

export const allCards: SwipeCard[] = [
  ...stage1Generic,
  ...stage2Generic,
  ...stage3Generic,
];
