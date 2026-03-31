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
      effects: { safety: 5, skill: -5 },
      outcomes: [
        { id: 's1_boss_ai_decline_good', text: { zh: '你专注本职工作，被评为季度之星。', en: 'You focused on core work and became Employee of the Quarter.' }, effects: { safety: 8, skill: 5 }, weight: 35 },
        { id: 's1_boss_ai_decline_mid', text: { zh: '老板有点失望，但也没说什么。', en: 'Boss was a bit disappointed but said nothing.' }, effects: { safety: 5, skill: -5 }, weight: 40 },
        { id: 's1_boss_ai_decline_bad', text: { zh: '另一个同事接手后大放异彩，你被边缘化了。', en: 'Another colleague took over and shone. You got sidelined.' }, effects: { safety: -5, skill: -8, network: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { skill: 10, safety: -5 },
      outcomes: [
        { id: 's1_boss_ai_accept_good', text: { zh: 'AI 工具部署成功！做了全公司培训，老板赏识！', en: 'AI tool deployed successfully! Company-wide training, boss is impressed!' }, effects: { skill: 12, network: 5 }, weight: 40, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_boss_ai_accept_mid', text: { zh: '工具还行，学到了一些基础知识。', en: 'Tool was okay. Learned some basics.' }, effects: { skill: 8 }, weight: 35 },
        { id: 's1_boss_ai_accept_bad', text: { zh: '项目搞砸了，加班善后，被老板训了一顿。', en: 'Project failed. Overtime cleanup. Boss was furious.' }, effects: { safety: -10, skill: 5 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_senior_work_overtime',
    character: 'senior',
    text: { zh: '"新人就该多加班，趁年轻多学点。"', en: '"Newbies should work overtime. Learn while young."' },
    leftChoice: {
      label: { zh: '准时下班', en: 'Leave on time' },
      effects: { safety: -5, network: -5 },
      outcomes: [
        { id: 's1_overtime_leave_good', text: { zh: '下班后去健身房锻炼，精力充沛效率反而更高了。', en: 'Hit the gym after work. More energy, better efficiency.' }, effects: { safety: 5, skill: 5 }, weight: 35 },
        { id: 's1_overtime_leave_mid', text: { zh: '前辈觉得你不够积极，但也没为难你。', en: 'Senior thinks you lack drive, but doesn\'t make a fuss.' }, effects: { safety: -5, network: -5 }, weight: 40 },
        { id: 's1_overtime_leave_bad', text: { zh: '你走后同事在背后议论，关系变差了。', en: 'Colleagues gossiped after you left. Relationships soured.' }, effects: { network: -10, safety: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '留下来', en: 'Stay late' },
      effects: { skill: 8, safety: -5 },
      outcomes: [
        { id: 's1_overtime_stay_good', text: { zh: '加班中前辈教了你很多实战经验，收获满满！', en: 'Senior taught you tons of practical skills during overtime!' }, effects: { skill: 12, network: 5 }, weight: 40 },
        { id: 's1_overtime_stay_mid', text: { zh: '多学了些东西，但也挺累的。', en: 'Learned a bit, but exhausting.' }, effects: { skill: 8, safety: -5 }, weight: 35 },
        { id: 's1_overtime_stay_bad', text: { zh: '加班太多身体吃不消，第二天请了病假。', en: 'Too much overtime. Called in sick the next day.' }, effects: { safety: -12, skill: 5 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_colleague_lunch_invite',
    character: 'colleague',
    text: { zh: '"中午一起吃饭？聊聊部门八卦。"', en: '"Lunch together? Let me fill you in on office gossip."' },
    leftChoice: {
      label: { zh: '自己吃', en: 'Eat alone' },
      effects: { skill: 5 },
      outcomes: [
        { id: 's1_lunch_alone_good', text: { zh: '午休看了技术文章，灵感迸发解决了一个难题！', en: 'Read a tech article at lunch, got inspired and solved a tough problem!' }, effects: { skill: 10 }, weight: 35 },
        { id: 's1_lunch_alone_mid', text: { zh: '安静的午餐，休息得不错。', en: 'Quiet lunch. Good rest.' }, effects: { skill: 5 }, weight: 40 },
        { id: 's1_lunch_alone_bad', text: { zh: '同事觉得你不合群，下次项目没叫你。', en: 'Colleagues think you\'re antisocial. Left out of next project.' }, effects: { skill: 5, network: -8 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '一起去', en: 'Join lunch' },
      effects: { network: 8, finance: -5 },
      outcomes: [
        { id: 's1_lunch_join_good', text: { zh: '午餐时同事透露了一个内部调动的好机会！', en: 'Colleague revealed an internal transfer opportunity at lunch!' }, effects: { network: 12, finance: -5 }, weight: 40 },
        { id: 's1_lunch_join_mid', text: { zh: '聊得开心，关系近了一些。', en: 'Good chat. Bonded a bit.' }, effects: { network: 8, finance: -5 }, weight: 35 },
        { id: 's1_lunch_join_bad', text: { zh: '不小心说了领导坏话被传了出去……', en: 'Accidentally badmouthed the boss and it got around...' }, effects: { network: -5, safety: -8 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_hr_training_program',
    character: 'hr',
    text: { zh: '"有一个 AI 培训课程，名额有限，要报名吗？"', en: '"Limited spots for an AI training program. Sign up?"' },
    leftChoice: {
      label: { zh: '算了', en: 'Pass' },
      effects: { safety: 5 },
      outcomes: [
        { id: 's1_training_pass_good', text: { zh: '省下时间做了自己的项目，反而学到了更多。', en: 'Used the saved time on your own project and learned more.' }, effects: { safety: 5, skill: 5 }, weight: 35 },
        { id: 's1_training_pass_mid', text: { zh: '没什么变化，日子照旧。', en: 'Nothing changed. Life goes on.' }, effects: { safety: 5 }, weight: 40 },
        { id: 's1_training_pass_bad', text: { zh: '参加培训的同事升职了，你后悔没报名。', en: 'Colleague who attended got promoted. You regret skipping.' }, effects: { safety: -5, skill: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '报名', en: 'Sign up' },
      effects: { skill: 10, finance: -5 },
      outcomes: [
        { id: 's1_training_join_good', text: { zh: '课程收获巨大！学会了用 AI 做高级 PPT，被老板赏识！', en: 'Course was amazing! Learned AI-powered presentations, boss is impressed!' }, effects: { skill: 12, network: 5, finance: -5 }, weight: 40, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's1_training_join_mid', text: { zh: '培训内容还行，学到了一些基础。', en: 'Training was okay. Picked up the basics.' }, effects: { skill: 10, finance: -5 }, weight: 35 },
        { id: 's1_training_join_bad', text: { zh: '培训是个坑，内容粗糙，钱白花了。', en: 'Training was a scam. Shallow content. Money wasted.' }, effects: { skill: 3, finance: -10 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_boss_weekend_project',
    character: 'boss',
    text: { zh: '"这个项目周末能赶完吗？有加班费。"', en: '"Can you finish this project over the weekend? There\'s overtime pay."' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Refuse' },
      effects: { safety: 5, finance: -5 },
      outcomes: [
        { id: 's1_weekend_refuse_good', text: { zh: '周末去参加了行业沙龙，认识了不少人。', en: 'Attended an industry meetup on the weekend. Made great connections.' }, effects: { safety: 5, network: 8 }, weight: 35 },
        { id: 's1_weekend_refuse_mid', text: { zh: '老板有点不高兴，但周末确实休息好了。', en: 'Boss was slightly unhappy, but you got good rest.' }, effects: { safety: 5, finance: -5 }, weight: 40 },
        { id: 's1_weekend_refuse_bad', text: { zh: '其他同事顶上了，老板以后优先考虑他们。', en: 'Others stepped up. Boss now favors them.' }, effects: { network: -8, finance: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '接活', en: 'Take it' },
      effects: { finance: 10, safety: -8 },
      outcomes: [
        { id: 's1_weekend_take_good', text: { zh: '项目提前完成，老板大为赞赏，额外给了奖金！', en: 'Finished early! Boss was thrilled and gave a bonus!' }, effects: { finance: 15, network: 5 }, weight: 35 },
        { id: 's1_weekend_take_mid', text: { zh: '周末加了两天班，赚了加班费。', en: 'Worked all weekend. Got the overtime pay.' }, effects: { finance: 10, safety: -8 }, weight: 40 },
        { id: 's1_weekend_take_bad', text: { zh: '项目延期了，周末白加班还被批评效率低。', en: 'Project delayed anyway. Weekend wasted, criticized for low efficiency.' }, effects: { safety: -12, finance: 5 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_ai_chatbot_launch',
    character: 'ai',
    text: { zh: '"新一代 AI 助手上线了，要试试吗？"', en: '"New AI assistant launched. Want to try it?"' },
    leftChoice: {
      label: { zh: '观望', en: 'Wait and see' },
      effects: { safety: 5 },
      outcomes: [
        { id: 's1_chatbot_wait_good', text: { zh: '等了一个月再用，避开了早期 bug，体验极佳。', en: '等了一个月再用，避开了早期 bug，体验极佳。' }, effects: { safety: 8, skill: 5 }, weight: 35 },
        { id: 's1_chatbot_wait_mid', text: { zh: '错过了尝鲜期，但也没啥损失。', en: '错过了尝鲜期，但也没啥损失。' }, effects: { safety: 5 }, weight: 40 },
        { id: 's1_chatbot_wait_bad', text: { zh: '同事们都在聊 AI，你插不上话，被排挤了。', en: '同事们都在聊 AI，你插不上话，被排挤了。' }, effects: { network: -8 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '立刻用', en: 'Use it now' },
      effects: { skill: 8, safety: -5 },
      outcomes: [
        { id: 's1_chatbot_use_good', text: { zh: '用 AI 助手写了一份惊艳方案，领导在大会上表扬了你！', en: '用 AI 助手写了一份惊艳方案，领导在大会上表扬了你！' }, effects: { skill: 10, network: 5 }, weight: 40 },
        { id: 's1_chatbot_use_mid', text: { zh: '用了几天，感觉还不错，提高了点效率。', en: '用了几天，感觉还不错，提高了点效率。' }, effects: { skill: 8, safety: -5 }, weight: 35 },
        { id: 's1_chatbot_use_bad', text: { zh: 'AI 生成的内容全是胡说八道，发给客户被投诉了……', en: 'AI 生成的内容全是胡说八道，发给客户被投诉了……' }, effects: { safety: -10, skill: -5 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_colleague_side_hustle',
    character: 'colleague',
    text: { zh: '"我在搞副业，一起来？赚点外快。"', en: '"I have a side gig. Want in? Good extra cash."' },
    leftChoice: {
      label: { zh: '不参与', en: 'No thanks' },
      effects: { safety: 5 },
      outcomes: [
        { id: 's1_side_no_good', text: { zh: '同事副业被公司发现，差点被开除。还好你没参与！', en: '同事副业被公司发现，差点被开除。还好你没参与！' }, effects: { safety: 10 }, weight: 35 },
        { id: 's1_side_no_mid', text: { zh: '安心上班，平平淡淡。', en: '安心上班，平平淡淡。' }, effects: { safety: 5 }, weight: 40 },
        { id: 's1_side_no_bad', text: { zh: '同事副业赚翻了，请全组吃饭，就你没份……', en: '同事副业赚翻了，请全组吃饭，就你没份……' }, effects: { finance: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '参与', en: 'Join in' },
      effects: { finance: 8, safety: -8 },
      outcomes: [
        { id: 's1_side_yes_good', text: { zh: '副业大赚！第一桶金到手，请同事吃了一顿大餐。', en: '副业大赚！第一桶金到手，请同事吃了一顿大餐。' }, effects: { finance: 12, network: 5 }, weight: 35 },
        { id: 's1_side_yes_mid', text: { zh: '赚了点零花钱，不多但聊胜于无。', en: '赚了点零花钱，不多但聊胜于无。' }, effects: { finance: 8, safety: -8 }, weight: 40 },
        { id: 's1_side_yes_bad', text: { zh: '副业亏钱了，还被主管发现上班时间摸鱼……', en: '副业亏钱了，还被主管发现上班时间摸鱼……' }, effects: { finance: -8, safety: -12 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_senior_mentor_advice',
    character: 'senior',
    text: { zh: '"别只顾着技术，多认识人才是正道。"', en: '"Don\'t just focus on tech. Networking is key."' },
    leftChoice: {
      label: { zh: '继续钻研', en: 'Keep studying' },
      effects: { skill: 8, network: -5 },
      outcomes: [
        { id: 's1_mentor_study_good', text: { zh: '闷头钻研三个月，发表了技术博客，被大佬转发！', en: '闷头钻研三个月，发表了技术博客，被大佬转发！' }, effects: { skill: 12, network: 3 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_mentor_study_mid', text: { zh: '技术进步了，但社交圈确实小了点。', en: '技术进步了，但社交圈确实小了点。' }, effects: { skill: 8, network: -5 }, weight: 40 },
        { id: 's1_mentor_study_bad', text: { zh: '闭门造车，方向搞偏了，白费功夫。', en: '闭门造车，方向搞偏了，白费功夫。' }, effects: { skill: -5, network: -8 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '听建议', en: 'Take advice' },
      effects: { network: 8, skill: -5 },
      outcomes: [
        { id: 's1_mentor_network_good', text: { zh: '参加行业聚会，认识了未来的创业伙伴！', en: '参加行业聚会，认识了未来的创业伙伴！' }, effects: { network: 12, finance: 3 }, weight: 40 },
        { id: 's1_mentor_network_mid', text: { zh: '多认识了几个人，技术落下了一点。', en: '多认识了几个人，技术落下了一点。' }, effects: { network: 8, skill: -5 }, weight: 35 },
        { id: 's1_mentor_network_bad', text: { zh: '社交场合遇到骗子，被忽悠买了理财产品。', en: '社交场合遇到骗子，被忽悠买了理财产品。' }, effects: { network: 5, finance: -10 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_boss_performance_review',
    character: 'boss',
    text: { zh: '"年度评估，你想争取升职还是稳一下？"', en: '"Annual review. Push for promotion or play it safe?"' },
    leftChoice: {
      label: { zh: '稳着来', en: 'Play safe' },
      effects: { safety: 8 },
      outcomes: [
        { id: 's1_review_safe_good', text: { zh: '稳扎稳打获得了"最佳可靠员工"奖。', en: '稳扎稳打获得了"最佳可靠员工"奖。' }, effects: { safety: 10, network: 3 }, weight: 35 },
        { id: 's1_review_safe_mid', text: { zh: '不功不过，继续原地踏步。', en: '不功不过，继续原地踏步。' }, effects: { safety: 8 }, weight: 40 },
        { id: 's1_review_safe_bad', text: { zh: '太低调了，年终奖拿了最低档。', en: '太低调了，年终奖拿了最低档。' }, effects: { safety: 5, finance: -8 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '争取', en: 'Push for it' },
      effects: { finance: 8, safety: -8, network: 5 },
      outcomes: [
        { id: 's1_review_push_good', text: { zh: '绩效答辩惊艳全场，直接升了一级！加薪30%！', en: '绩效答辩惊艳全场，直接升了一级！加薪30%！' }, effects: { finance: 12, network: 8 }, weight: 35 },
        { id: 's1_review_push_mid', text: { zh: '争取了但没升，老板说明年再看。', en: '争取了但没升，老板说明年再看。' }, effects: { finance: 8, safety: -8, network: 5 }, weight: 40 },
        { id: 's1_review_push_bad', text: { zh: '表现太急切被老板打上了"浮躁"标签。', en: '表现太急切被老板打上了"浮躁"标签。' }, effects: { safety: -10, network: -5 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_hr_team_building',
    character: 'hr',
    text: { zh: '"周末团建活动，参加吗？"', en: '"Weekend team building event. Coming?"' },
    leftChoice: {
      label: { zh: '不去', en: 'Skip' },
      effects: { network: -5 },
      outcomes: [
        { id: 's1_team_skip_good', text: { zh: '周末在家学了新技术，周一解决了团队难题。', en: '周末在家学了新技术，周一解决了团队难题。' }, effects: { skill: 8 }, weight: 35 },
        { id: 's1_team_skip_mid', text: { zh: '没去团建，同事也没怎么在意。', en: '没去团建，同事也没怎么在意。' }, effects: { network: -5 }, weight: 40 },
        { id: 's1_team_skip_bad', text: { zh: '团建上大家建立了深厚友谊，以后小群都不带你玩了。', en: '团建上大家建立了深厚友谊，以后小群都不带你玩了。' }, effects: { network: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '参加', en: 'Attend' },
      effects: { network: 8, safety: -5 },
      outcomes: [
        { id: 's1_team_go_good', text: { zh: '团建中帮老板挡了一杯酒，好感度暴增！', en: '团建中帮老板挡了一杯酒，好感度暴增！' }, effects: { network: 12, safety: 3 }, weight: 35 },
        { id: 's1_team_go_mid', text: { zh: '玩得挺开心，拉近了同事关系。', en: '玩得挺开心，拉近了同事关系。' }, effects: { network: 8, safety: -5 }, weight: 40 },
        { id: 's1_team_go_bad', text: { zh: '团建喝多了说错话，第二天被全公司传……', en: '团建喝多了说错话，第二天被全公司传……' }, effects: { network: -5, safety: -10 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_ai_automate_report',
    character: 'ai',
    text: { zh: '"你的周报可以用 AI 自动生成了。"', en: '"Your weekly report can now be auto-generated by AI."' },
    leftChoice: {
      label: { zh: '手写', en: 'Write manually' },
      effects: { skill: 5, safety: 5 },
      outcomes: [
        { id: 's1_report_manual_good', text: { zh: '手写周报被老板夸"有深度"，成了模板在部门推广。', en: '手写周报被老板夸"有深度"，成了模板在部门推广。' }, effects: { skill: 8, network: 5 }, weight: 35 },
        { id: 's1_report_manual_mid', text: { zh: '写得认真，但也花了不少时间。', en: '写得认真，但也花了不少时间。' }, effects: { skill: 5, safety: 5 }, weight: 40 },
        { id: 's1_report_manual_bad', text: { zh: '花了一下午写周报，核心工作反而没干完。', en: '花了一下午写周报，核心工作反而没干完。' }, effects: { safety: -5, skill: 3 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '用 AI', en: 'Use AI' },
      effects: { skill: -5, safety: -5, finance: 5 },
      outcomes: [
        { id: 's1_report_ai_good', text: { zh: 'AI 写的周报又快又好，省下时间做了个小工具，被表扬！', en: 'AI 写的周报又快又好，省下时间做了个小工具，被表扬！' }, effects: { skill: 5, finance: 8 }, weight: 35 },
        { id: 's1_report_ai_mid', text: { zh: '省了点时间，但内容很模板化。', en: '省了点时间，但内容很模板化。' }, effects: { skill: -5, safety: -5, finance: 5 }, weight: 40 },
        { id: 's1_report_ai_bad', text: { zh: 'AI 在周报里编造了不存在的项目进度，被老板当场揭穿！', en: 'AI 在周报里编造了不存在的项目进度，被老板当场揭穿！' }, effects: { safety: -12, skill: -5 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_headhunter_first_call',
    character: 'headhunter',
    text: { zh: '"你好，有个机会想跟你聊聊。"', en: '"Hi, I have an opportunity to discuss with you."' },
    leftChoice: {
      label: { zh: '不感兴趣', en: 'Not interested' },
      effects: { safety: 5 },
      outcomes: [
        { id: 's1_hunter_no_good', text: { zh: '专心本职，年底拿到了超预期的年终奖。', en: '专心本职，年底拿到了超预期的年终奖。' }, effects: { safety: 5, finance: 5 }, weight: 35 },
        { id: 's1_hunter_no_mid', text: { zh: '挂了电话，该干嘛干嘛。', en: '挂了电话，该干嘛干嘛。' }, effects: { safety: 5 }, weight: 40 },
        { id: 's1_hunter_no_bad', text: { zh: '后来听说那是个年薪翻倍的好机会……', en: '后来听说那是个年薪翻倍的好机会……' }, effects: { finance: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '聊聊', en: 'Let\'s talk' },
      effects: { network: 8, safety: -5 },
      outcomes: [
        { id: 's1_hunter_yes_good', text: { zh: '虽然没跳槽，但猎头帮你了解了市场行情，谈薪有了底气。', en: '虽然没跳槽，但猎头帮你了解了市场行情，谈薪有了底气。' }, effects: { network: 10, finance: 5 }, weight: 40 },
        { id: 's1_hunter_yes_mid', text: { zh: '了解了外部机会，但暂时没动。', en: '了解了外部机会，但暂时没动。' }, effects: { network: 8, safety: -5 }, weight: 35 },
        { id: 's1_hunter_yes_bad', text: { zh: '跟猎头聊的事被公司知道了，被领导叫去谈话了……', en: '跟猎头聊的事被公司知道了，被领导叫去谈话了……' }, effects: { safety: -12, network: -5 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_colleague_certification',
    character: 'colleague',
    text: { zh: '"我在考 AI 认证，一起备考？"', en: '"I\'m getting AI certified. Study together?"' },
    leftChoice: {
      label: { zh: '没时间', en: 'No time' },
      effects: { safety: 5 },
      outcomes: [
        { id: 's1_cert_no_good', text: { zh: '利用空闲时间做了个人项目，反而更有价值。', en: '利用空闲时间做了个人项目，反而更有价值。' }, effects: { safety: 5, skill: 5 }, weight: 35 },
        { id: 's1_cert_no_mid', text: { zh: '没考证，也没什么影响。', en: '没考证，也没什么影响。' }, effects: { safety: 5 }, weight: 40 },
        { id: 's1_cert_no_bad', text: { zh: '同事考上了证，简历多了一行，竞聘赢过了你。', en: '同事考上了证，简历多了一行，竞聘赢过了你。' }, effects: { safety: -5, skill: -3 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '一起考', en: 'Study together' },
      effects: { skill: 8, network: 5, finance: -5 },
      outcomes: [
        { id: 's1_cert_yes_good', text: { zh: '一次考过！简历上多了个含金量很高的证书，HR 们抢着递橄榄枝。', en: '一次考过！简历上多了个含金量很高的证书，HR 们抢着递橄榄枝。' }, effects: { skill: 12, network: 8, finance: -5 }, weight: 35 },
        { id: 's1_cert_yes_mid', text: { zh: '考了两次才过，学到了不少东西。', en: '考了两次才过，学到了不少东西。' }, effects: { skill: 8, network: 5, finance: -5 }, weight: 40 },
        { id: 's1_cert_yes_bad', text: { zh: '考试没过，报名费白花了，还浪费了好多周末。', en: '考试没过，报名费白花了，还浪费了好多周末。' }, effects: { skill: 3, finance: -10 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_boss_present_to_client',
    character: 'boss',
    text: { zh: '"下周给客户做演示，你来讲？"', en: '"Client demo next week. You present?"' },
    leftChoice: {
      label: { zh: '推给别人', en: 'Defer' },
      effects: { safety: 5, network: -5 },
      outcomes: [
        { id: 's1_present_defer_good', text: { zh: '让更擅长的同事去了，他讲得很好，你也有时间完成手头工作。', en: '让更擅长的同事去了，他讲得很好，你也有时间完成手头工作。' }, effects: { safety: 8 }, weight: 35 },
        { id: 's1_present_defer_mid', text: { zh: '老板没说什么，但似乎有点失望。', en: '老板没说什么，但似乎有点失望。' }, effects: { safety: 5, network: -5 }, weight: 40 },
        { id: 's1_present_defer_bad', text: { zh: '去讲的同事搞砸了，老板怪你不担当。', en: '去讲的同事搞砸了，老板怪你不担当。' }, effects: { network: -10, safety: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '我来', en: 'I\'ll do it' },
      effects: { network: 10, skill: 5, safety: -5 },
      outcomes: [
        { id: 's1_present_go_good', text: { zh: '演示超级成功！客户当场签了合同，你成了部门英雄！', en: '演示超级成功！客户当场签了合同，你成了部门英雄！' }, effects: { network: 15, skill: 8, finance: 5 }, weight: 35, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's1_present_go_mid', text: { zh: '讲得中规中矩，客户说再考虑考虑。', en: '讲得中规中矩，客户说再考虑考虑。' }, effects: { network: 10, skill: 5, safety: -5 }, weight: 40 },
        { id: 's1_present_go_bad', text: { zh: '现场紧张忘词，客户全程玩手机……老板脸色铁青。', en: '现场紧张忘词，客户全程玩手机……老板脸色铁青。' }, effects: { safety: -10, network: -5 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  {
    id: 's1_senior_save_money',
    character: 'senior',
    text: { zh: '"年轻人要学会存钱，别月光。"', en: '"Young people should save. Don\'t blow your paycheck."' },
    leftChoice: {
      label: { zh: '享受当下', en: 'Live now' },
      effects: { network: 5, finance: -8 },
      outcomes: [
        { id: 's1_save_enjoy_good', text: { zh: '花钱报了个高端课程，认识了一圈优秀的人。', en: '花钱报了个高端课程，认识了一圈优秀的人。' }, effects: { network: 10, skill: 3, finance: -5 }, weight: 35 },
        { id: 's1_save_enjoy_mid', text: { zh: '花钱开心，但月底确实有点紧巴。', en: '花钱开心，但月底确实有点紧巴。' }, effects: { network: 5, finance: -8 }, weight: 40 },
        { id: 's1_save_enjoy_bad', text: { zh: '月光到借了花呗，利息越滚越多……', en: '月光到借了花呗，利息越滚越多……' }, effects: { finance: -12 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '开始存钱', en: 'Start saving' },
      effects: { finance: 10, network: -5 },
      outcomes: [
        { id: 's1_save_yes_good', text: { zh: '半年存了一笔小钱，后来正好赶上了一个投资机会。', en: '半年存了一笔小钱，后来正好赶上了一个投资机会。' }, effects: { finance: 12 }, weight: 35 },
        { id: 's1_save_yes_mid', text: { zh: '每月省吃俭用，余额在慢慢涨。', en: '每月省吃俭用，余额在慢慢涨。' }, effects: { finance: 10, network: -5 }, weight: 40 },
        { id: 's1_save_yes_bad', text: { zh: '总是回绝聚餐邀请，同事觉得你小气，渐渐被孤立。', en: '总是回绝聚餐邀请，同事觉得你小气，渐渐被孤立。' }, effects: { finance: 8, network: -10 }, weight: 25 },
      ],
    },
    stage: 1,
  },
  // Career-specific: programmer
  {
    id: 's1_boss_code_review_ai',
    character: 'boss',
    text: { zh: '"用 AI 做 Code Review，能提效不？"', en: '"Use AI for code review. Can it improve efficiency?"' },
    leftChoice: {
      label: { zh: '人工更靠谱', en: 'Manual is safer' },
      effects: { safety: 8 },
      outcomes: [
        { id: 's1_codereview_manual_good', text: { zh: '手动 Code Review 发现了一个严重 bug，救了整个项目！', en: 'Manual code review caught a critical bug. Saved the whole project!' }, effects: { safety: 12, skill: 8 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_codereview_manual_mid', text: { zh: '审查效率一般，但代码质量有保障。', en: 'Review pace was average, but code quality was solid.' }, effects: { safety: 8 }, weight: 40 },
        { id: 's1_codereview_manual_bad', text: { zh: '团队效率比不上隔壁用 AI 的组，被点名批评。', en: 'Team fell behind the AI-using group. Got called out.' }, effects: { safety: -5, network: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '试试', en: 'Let\'s try' },
      effects: { skill: 10, safety: -8 },
      outcomes: [
        { id: 's1_codereview_ai_good', text: { zh: 'AI Review 效率爆表，你被提拔为技术委员会成员！', en: 'AI review was incredibly efficient. You got promoted to the tech committee!' }, effects: { skill: 15, network: 8 }, weight: 40, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_codereview_ai_mid', text: { zh: 'AI 审查还不错，减少了些重复工作。', en: 'AI review was decent. Reduced some repetitive work.' }, effects: { skill: 10, safety: -8 }, weight: 35 },
        { id: 's1_codereview_ai_bad', text: { zh: 'AI 漏掉了关键问题，线上出了 bug，得加班修复。', en: 'AI missed a critical issue. Production bug. Overtime to fix.' }, effects: { safety: -15, skill: 5 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['programmer'],
  },
  {
    id: 's1_colleague_copilot',
    character: 'colleague',
    text: { zh: '"你用 Copilot 了吗？写代码快了两倍。"', en: '"Using Copilot yet? Doubles my coding speed."' },
    leftChoice: {
      label: { zh: '自己写', en: 'Code myself' },
      effects: { skill: 5, safety: 5 },
      outcomes: [
        { id: 's1_copilot_no_good', text: { zh: '手写代码的功底被CTO看重，被选入核心架构组！', en: '手写代码的功底被CTO看重，被选入核心架构组！' }, effects: { skill: 10, network: 5 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_copilot_no_mid', text: { zh: '写得慢了点，但代码质量很扎实。', en: '写得慢了点，但代码质量很扎实。' }, effects: { skill: 5, safety: 5 }, weight: 40 },
        { id: 's1_copilot_no_bad', text: { zh: '产出太慢被项目经理投诉，差点被换掉。', en: '产出太慢被项目经理投诉，差点被换掉。' }, effects: { safety: -8 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '开始用', en: 'Start using' },
      effects: { skill: 8, safety: -5 },
      outcomes: [
        { id: 's1_copilot_yes_good', text: { zh: 'Copilot + 你的审查 = 效率翻倍！团队全面推广。', en: 'Copilot + 你的审查 = 效率翻倍！团队全面推广。' }, effects: { skill: 12, network: 5 }, weight: 40, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's1_copilot_yes_mid', text: { zh: '写代码确实快了，但有时候要改 AI 写的奇怪逻辑。', en: '写代码确实快了，但有时候要改 AI 写的奇怪逻辑。' }, effects: { skill: 8, safety: -5 }, weight: 35 },
        { id: 's1_copilot_yes_bad', text: { zh: 'Copilot 引入了安全漏洞，线上被黑客攻击！全员加班修复。', en: 'Copilot 引入了安全漏洞，线上被黑客攻击！全员加班修复。' }, effects: { safety: -15 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['programmer'],
  },
  // Career-specific: designer
  {
    id: 's1_boss_ai_design_tool',
    character: 'boss',
    text: { zh: '"客户要用 AI 出图，你觉得行吗？"', en: '"Client wants AI-generated designs. Think it works?"' },
    leftChoice: {
      label: { zh: '坚持手绘', en: 'Stick to manual' },
      effects: { safety: 5, skill: 5 },
      outcomes: [
        { id: 's1_design_manual_good', text: { zh: '客户最终选了你的手绘方案，说"有温度"！', en: '客户最终选了你的手绘方案，说"有温度"！' }, effects: { skill: 10, safety: 5 }, weight: 35, careerWeightModifiers: { designer: 1.5 } },
        { id: 's1_design_manual_mid', text: { zh: '手绘出图慢了点，但质量不错。', en: '手绘出图慢了点，但质量不错。' }, effects: { safety: 5, skill: 5 }, weight: 40 },
        { id: 's1_design_manual_bad', text: { zh: '客户嫌出图太慢，直接换了用 AI 的竞品公司。', en: '客户嫌出图太慢，直接换了用 AI 的竞品公司。' }, effects: { safety: -8, finance: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '可以试试', en: 'Worth trying' },
      effects: { skill: 8, safety: -8 },
      outcomes: [
        { id: 's1_design_ai_good', text: { zh: 'AI 出图 + 你的审美眼光 = 客户直呼"太牛了"！', en: 'AI 出图 + 你的审美眼光 = 客户直呼"太牛了"！' }, effects: { skill: 12, finance: 5 }, weight: 40, careerWeightModifiers: { designer: 1.5 } },
        { id: 's1_design_ai_mid', text: { zh: 'AI 出图效果一般，但节省了不少时间。', en: 'AI 出图效果一般，但节省了不少时间。' }, effects: { skill: 8, safety: -8 }, weight: 35 },
        { id: 's1_design_ai_bad', text: { zh: 'AI 出的图风格诡异，客户看了直接吓跑。', en: 'AI 出的图风格诡异，客户看了直接吓跑。' }, effects: { safety: -12, network: -5 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['designer'],
  },
  {
    id: 's1_colleague_design_portfolio',
    character: 'colleague',
    text: { zh: '"一起做个设计作品集，提升曝光？"', en: '"Build a portfolio together for more exposure?"' },
    leftChoice: {
      label: { zh: '单干', en: 'Solo' },
      effects: { skill: 5 },
      outcomes: [
        { id: 's1_portfolio_solo_good', text: { zh: '独立作品集风格鲜明，被设计杂志收录！', en: '独立作品集风格鲜明，被设计杂志收录！' }, effects: { skill: 10, network: 5 }, weight: 35 },
        { id: 's1_portfolio_solo_mid', text: { zh: '做了个还不错的作品集，放在简历上。', en: '做了个还不错的作品集，放在简历上。' }, effects: { skill: 5 }, weight: 40 },
        { id: 's1_portfolio_solo_bad', text: { zh: '独自做的作品集太自嗨了，反响平平。', en: '独自做的作品集太自嗨了，反响平平。' }, effects: { skill: 3, network: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '合作', en: 'Collaborate' },
      effects: { network: 8, skill: 5 },
      outcomes: [
        { id: 's1_portfolio_collab_good', text: { zh: '合作作品集上了 Dribbble 热门，两人一起涨了一波粉！', en: '合作作品集上了 Dribbble 热门，两人一起涨了一波粉！' }, effects: { network: 12, skill: 8 }, weight: 40, careerWeightModifiers: { designer: 1.3 } },
        { id: 's1_portfolio_collab_mid', text: { zh: '合作还算愉快，作品集完成了。', en: '合作还算愉快，作品集完成了。' }, effects: { network: 8, skill: 5 }, weight: 35 },
        { id: 's1_portfolio_collab_bad', text: { zh: '两人审美不合，闹了矛盾，项目搁浅了。', en: '两人审美不合，闹了矛盾，项目搁浅了。' }, effects: { network: -8 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['designer'],
  },
  // Career-specific: teacher
  {
    id: 's1_senior_ai_courseware',
    character: 'senior',
    text: { zh: '"AI 课件生成器出来了，要不要用？"', en: '"AI courseware generator is out. Want to use it?"' },
    leftChoice: {
      label: { zh: '自己做', en: 'Make my own' },
      effects: { skill: 5, safety: 5 },
      outcomes: [
        { id: 's1_courseware_manual_good', text: { zh: '精心制作的课件获得了教学评比一等奖！', en: '精心制作的课件获得了教学评比一等奖！' }, effects: { skill: 10, network: 5, safety: 5 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's1_courseware_manual_mid', text: { zh: '课件做得不错，学生反馈还行。', en: '课件做得不错，学生反馈还行。' }, effects: { skill: 5, safety: 5 }, weight: 40 },
        { id: 's1_courseware_manual_bad', text: { zh: '花了大量时间做课件，其他工作落下了。', en: '花了大量时间做课件，其他工作落下了。' }, effects: { skill: 3, safety: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '用 AI', en: 'Use AI' },
      effects: { skill: -5, safety: -5, finance: 5 },
      outcomes: [
        { id: 's1_courseware_ai_good', text: { zh: 'AI 课件 + 你的教学经验 = 学生评分飙升！被评为年度优秀教师！', en: 'AI 课件 + 你的教学经验 = 学生评分飙升！被评为年度优秀教师！' }, effects: { skill: 5, network: 8, finance: 5 }, weight: 35 },
        { id: 's1_courseware_ai_mid', text: { zh: 'AI 课件省了不少时间，质量尚可。', en: 'AI 课件省了不少时间，质量尚可。' }, effects: { skill: -5, safety: -5, finance: 5 }, weight: 40 },
        { id: 's1_courseware_ai_bad', text: { zh: 'AI 生成了错误知识点，被学生家长投诉了！', en: 'AI 生成了错误知识点，被学生家长投诉了！' }, effects: { safety: -12, skill: -5 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['teacher'],
  },
  {
    id: 's1_colleague_teach_competition',
    character: 'colleague',
    text: { zh: '"教学竞赛报名了吗？获奖能加工资。"', en: '"Signed up for teaching competition? Winners get raises."' },
    leftChoice: {
      label: { zh: '不参加', en: 'Skip' },
      effects: { safety: 5 },
      outcomes: [
        { id: 's1_teach_comp_no_good', text: { zh: '把时间花在辅导学生上，有个学生考上了重点大学！', en: '把时间花在辅导学生上，有个学生考上了重点大学！' }, effects: { safety: 5, network: 5, skill: 3 }, weight: 35 },
        { id: 's1_teach_comp_no_mid', text: { zh: '没参加竞赛，教学照常进行。', en: '没参加竞赛，教学照常进行。' }, effects: { safety: 5 }, weight: 40 },
        { id: 's1_teach_comp_no_bad', text: { zh: '获奖的同事升了职称，你还在原地……', en: '获奖的同事升了职称，你还在原地……' }, effects: { safety: -3, finance: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '参加', en: 'Sign up' },
      effects: { skill: 8, finance: 5, safety: -5 },
      outcomes: [
        { id: 's1_teach_comp_yes_good', text: { zh: '教学竞赛拿了一等奖！校长亲自颁奖，当月多发了奖金。', en: '教学竞赛拿了一等奖！校长亲自颁奖，当月多发了奖金。' }, effects: { skill: 12, finance: 10, network: 5 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's1_teach_comp_yes_mid', text: { zh: '拿了个三等奖，还算有点收获。', en: '拿了个三等奖，还算有点收获。' }, effects: { skill: 8, finance: 5, safety: -5 }, weight: 40 },
        { id: 's1_teach_comp_yes_bad', text: { zh: '准备到半夜结果初赛就被刷了，身心俱疲。', en: '准备到半夜结果初赛就被刷了，身心俱疲。' }, effects: { safety: -10, skill: 3 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['teacher'],
  },
  // Career-specific: doctor
  {
    id: 's1_senior_ai_diagnosis',
    character: 'senior',
    text: { zh: '"AI 辅助诊断系统要上线了，你怎么看？"', en: '"AI-assisted diagnosis system launching. Your thoughts?"' },
    leftChoice: {
      label: { zh: '持观望', en: 'Wait and watch' },
      effects: { safety: 8 },
      outcomes: [
        { id: 's1_ai_diagnosis_left_good', text: { zh: 'AI 系统上线后漏洞百出，你因为没参与反而避开了责任风暴。', en: 'The AI system launched full of bugs. By staying out, you dodged the blame storm.' }, effects: { safety: 10 }, weight: 35 },
        { id: 's1_ai_diagnosis_left_mid', text: { zh: '系统上线了，同事们忙得焦头烂额，你照常出诊倒也安稳。', en: 'System launched. Colleagues scrambled while you carried on with regular duties.' }, effects: { safety: 5 }, weight: 40 },
        { id: 's1_ai_diagnosis_left_bad', text: { zh: '主任点名批评你缺乏创新精神，年终考核被扣了分。', en: 'Director called you out for lacking innovation. Lost points on annual review.' }, effects: { safety: -5, network: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '积极参与', en: 'Get involved' },
      effects: { skill: 10, safety: -5 },
      outcomes: [
        { id: 's1_ai_diagnosis_right_good', text: { zh: '你提出的临床反馈被采纳，成了科室里的"AI 专家"，主任很赏识。', en: 'Your clinical feedback was adopted. You became the department\'s "AI expert." Director impressed.' }, effects: { skill: 12, network: 8 }, weight: 35, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's1_ai_diagnosis_right_mid', text: { zh: '参与了几次培训和会议，学到了些东西但日常工作也堆积了不少。', en: 'Attended trainings and meetings. Learned a lot but regular work piled up.' }, effects: { skill: 8, safety: -5 }, weight: 40 },
        { id: 's1_ai_diagnosis_right_bad', text: { zh: 'AI 系统误诊了一例，你作为参与者被要求写事故报告，压力山大。', en: 'AI system misdiagnosed a case. As a participant, you had to write the incident report. Stressful.' }, effects: { skill: 5, safety: -10 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['doctor'],
  },
  {
    id: 's1_boss_night_shift',
    character: 'boss',
    text: { zh: '"这周夜班缺人，你能顶上吗？"', en: '"Night shift short-staffed this week. Can you cover?"' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Refuse' },
      effects: { network: -5 },
      outcomes: [
        { id: 's1_night_shift_left_good', text: { zh: '拒绝后睡了个好觉，第二天精神饱满看了20个号，患者好评如潮。', en: 'Refused and got a good night\'s sleep. Saw 20 patients next day feeling great. Rave reviews.' }, effects: { skill: 5, safety: 5 }, weight: 35 },
        { id: 's1_night_shift_left_mid', text: { zh: '主任嘴上没说什么，但排班表上你被换到了最不好的时段。', en: 'Boss said nothing, but you got moved to the worst time slot on the schedule.' }, effects: { network: -5 }, weight: 40 },
        { id: 's1_night_shift_left_bad', text: { zh: '夜班出了急诊事故，主任追责时提到"要是人手够就好了"，你感到压力倍增。', en: 'Night shift had an emergency incident. Boss remarked "if only we had enough staff." You felt the pressure.' }, effects: { network: -8, safety: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '顶上', en: 'Cover it' },
      effects: { finance: 8, safety: -8 },
      outcomes: [
        { id: 's1_night_shift_right_good', text: { zh: '夜班遇到疑难病例，你冷静处理，患者家属送了锦旗，主任当众表扬。', en: 'Handled a tricky case on night shift calmly. Patient\'s family sent a banner. Boss praised you publicly.' }, effects: { finance: 8, network: 8, skill: 5 }, weight: 35, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's1_night_shift_right_mid', text: { zh: '平淡的一个夜班，处理了几个常规病例，拿到了加班费。', en: 'Uneventful night shift. Handled a few routine cases and earned overtime pay.' }, effects: { finance: 8, safety: -5 }, weight: 40 },
        { id: 's1_night_shift_right_bad', text: { zh: '连轴转后第二天查房时差点开错医嘱，被护士长及时拦住。惊出一身冷汗。', en: 'After the back-to-back shift, nearly wrote a wrong prescription during rounds. Head nurse caught it just in time.' }, effects: { finance: 5, safety: -12, skill: -5 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['doctor'],
  },
  // Career-specific: content_creator
  {
    id: 's1_ai_content_generator',
    character: 'ai',
    text: { zh: '"AI 写作助手可以帮你日更。"', en: '"AI writing assistant can help you post daily."' },
    leftChoice: {
      label: { zh: '原创', en: 'Stay original' },
      effects: { skill: 8, safety: 5 },
      outcomes: [
        { id: 's1_ai_content_left_good', text: { zh: '你的原创文章意外爆火，粉丝留言说"终于看到有温度的内容了"。', en: 'Your original article went viral. Fans commented "finally, content with soul."' }, effects: { skill: 10, network: 8 }, weight: 35, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's1_ai_content_left_mid', text: { zh: '坚持原创虽然辛苦，但作品质量保持稳定，粉丝缓慢增长。', en: 'Staying original was tough, but quality remained steady and followers grew slowly.' }, effects: { skill: 8, safety: 5 }, weight: 40 },
        { id: 's1_ai_content_left_bad', text: { zh: '原创速度太慢，断更了一周，平台算法直接把你的推荐权重砍了。', en: 'Couldn\'t keep up the pace. Missed a week of posts and the algorithm tanked your reach.' }, effects: { skill: 5, finance: -5, safety: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '用 AI', en: 'Use AI' },
      effects: { finance: 5, skill: -5, safety: -5 },
      outcomes: [
        { id: 's1_ai_content_right_good', text: { zh: 'AI 帮你高效产出，你把省下的时间用来策划精品内容，两全其美。', en: 'AI boosted output. You used the saved time to plan premium content. Best of both worlds.' }, effects: { finance: 8, skill: 5 }, weight: 35 },
        { id: 's1_ai_content_right_mid', text: { zh: '用 AI 确实快了，但内容同质化严重，评论区开始有人说"像机器写的"。', en: 'AI sped things up, but content felt generic. Comments started saying "reads like a bot."' }, effects: { finance: 5, skill: -5 }, weight: 35 },
        { id: 's1_ai_content_right_bad', text: { zh: '被细心读者扒出用 AI 洗稿，遭到大规模取关和平台警告。', en: 'Sharp-eyed readers exposed your AI-generated content. Mass unfollows and a platform warning.' }, effects: { finance: -5, network: -8, safety: -10 }, weight: 30 },
      ],
    },
    stage: 1,
    careerIds: ['content_creator'],
  },
  {
    id: 's1_headhunter_brand_deal',
    character: 'headhunter',
    text: { zh: '"有个品牌想找你合作，佣金不错。"', en: '"A brand wants to partner. Good commission."' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Decline' },
      effects: { safety: 5 },
      outcomes: [
        { id: 's1_brand_deal_left_good', text: { zh: '拒绝后专注做自己的内容，反而吸引了更优质的品牌主动找上门。', en: 'Declined and focused on your own content. A better brand came knocking instead.' }, effects: { safety: 8, network: 5 }, weight: 35 },
        { id: 's1_brand_deal_left_mid', text: { zh: '没接这单，生活照旧，粉丝也没什么变化。', en: 'Passed on the deal. Life went on as usual. No change in followers.' }, effects: { safety: 5 }, weight: 40 },
        { id: 's1_brand_deal_left_bad', text: { zh: '那个品牌找了你的竞争对手，对方因此涨了一大波粉，你有点后悔。', en: 'The brand went to your competitor, who gained a huge follower boost. You felt some regret.' }, effects: { safety: -5, network: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '接单', en: 'Take it' },
      effects: { finance: 10, network: 5, safety: -5 },
      outcomes: [
        { id: 's1_brand_deal_right_good', text: { zh: '合作大获成功，品牌追加了长期合约，你的商业价值翻倍。', en: 'Collab was a hit. Brand offered a long-term contract. Your commercial value doubled.' }, effects: { finance: 12, network: 8 }, weight: 35, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's1_brand_deal_right_mid', text: { zh: '完成了合作，佣金到手，但粉丝反应平平，有人说"又恰饭"。', en: 'Finished the collab and got paid. Fans were lukewarm. Some said "another sellout."' }, effects: { finance: 10, network: -5 }, weight: 40 },
        { id: 's1_brand_deal_right_bad', text: { zh: '品牌产品出了质量问题，你作为推荐人被粉丝骂惨，信誉受损严重。', en: 'Brand product had quality issues. As the promoter, fans roasted you. Reputation took a serious hit.' }, effects: { finance: 5, network: -10, safety: -10 }, weight: 25 },
      ],
    },
    stage: 1,
    careerIds: ['content_creator'],
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
      effects: { safety: -15 },
      outcomes: [
        { id: 's2_layoff_ignore_good', text: { zh: '风波过去了，你的组幸运地被保留了。', en: 'Storm passed. Your team was luckily spared.' }, effects: { safety: -5 }, weight: 30 },
        { id: 's2_layoff_ignore_mid', text: { zh: '裁员名单公布了，你暂时安全但心惊胆战。', en: 'Layoff list announced. You\'re safe for now but on edge.' }, effects: { safety: -15 }, weight: 40 },
        { id: 's2_layoff_ignore_bad', text: { zh: '毫无准备的情况下被通知裁员，赔偿金最低档。', en: 'Notified of layoff unprepared. Got the minimum severance.' }, effects: { safety: -25, finance: -10 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '主动沟通', en: 'Talk to HR' },
      effects: { safety: -5, network: 10 },
      outcomes: [
        { id: 's2_layoff_talk_good', text: { zh: 'HR 被你的态度打动，推荐你去了核心部门！', en: 'HR was impressed by your attitude and transferred you to a core team!' }, effects: { safety: 5, network: 15 }, weight: 35, careerWeightModifiers: { teacher: 1.3 } },
        { id: 's2_layoff_talk_mid', text: { zh: '了解到了情况，提前做好了准备。', en: 'Got the full picture. Prepared in advance.' }, effects: { safety: -5, network: 10 }, weight: 40 },
        { id: 's2_layoff_talk_bad', text: { zh: '主动沟通反而被标记为"不稳定"，加速了被裁。', en: 'Proactive communication flagged you as "unstable". Accelerated your layoff.' }, effects: { safety: -15, network: -5 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_ai_replace_junior',
    character: 'ai',
    text: { zh: '"AI 已经可以完成初级岗位的大部分工作了。"', en: '"AI can now handle most junior-level tasks."' },
    leftChoice: {
      label: { zh: '无视', en: 'Ignore' },
      effects: { safety: -10 },
      outcomes: [
        { id: 's2_replace_junior_left_good', text: { zh: '初级岗虽被替代，但你的资历让你安然无恙。', en: 'Junior roles got replaced, but your seniority kept you safe.' }, effects: { safety: 5 }, weight: 35 },
        { id: 's2_replace_junior_left_mid', text: { zh: '暂时没影响，但隐隐觉得下一波可能轮到自己。', en: 'No impact yet, but you sense the next wave might reach you.' }, effects: { safety: -10 }, weight: 40 },
        { id: 's2_replace_junior_left_bad', text: { zh: '公司悄悄用 AI 替换了你负责的模块，你最后一个知道。', en: 'Company quietly replaced your module with AI. You were the last to know.' }, effects: { safety: -20, skill: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '升级技能', en: 'Upskill' },
      effects: { skill: 15, finance: -10 },
      outcomes: [
        { id: 's2_replace_junior_right_good', text: { zh: '新技能让你成了团队里唯一能驾驭 AI 工具的人，升职了！', en: 'New skills made you the only one who could wield AI tools. Promoted!' }, effects: { skill: 20, finance: 10 }, weight: 35 },
        { id: 's2_replace_junior_right_mid', text: { zh: '花了不少钱报班，学了一些但还没派上用场。', en: "Spent money on courses. Learned a bit but haven't applied it yet." }, effects: { skill: 15, finance: -10 }, weight: 40 },
        { id: 's2_replace_junior_right_bad', text: { zh: '报了天价培训班，结果内容过时了，钱打了水漂。', en: 'Signed up for expensive bootcamp. Content was outdated. Money wasted.' }, effects: { skill: -5, finance: -20 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_headhunter_rival_offer',
    character: 'headhunter',
    text: { zh: '"竞争对手出了双倍薪资挖你。"', en: '"Competitor offers double your salary."' },
    leftChoice: {
      label: { zh: '留下', en: 'Stay put' },
      effects: { safety: 10, finance: -10 },
      outcomes: [
        { id: 's2_rival_stay_good', text: { zh: '留下后公司给你涨了薪，还升了职。', en: 'Company gave you a raise and promotion for staying.' }, effects: { safety: 10, finance: 10, network: 5 }, weight: 30 },
        { id: 's2_rival_stay_mid', text: { zh: '留在舒适区，一切照旧。', en: 'Stayed in comfort zone. Business as usual.' }, effects: { safety: 10, finance: -10 }, weight: 45 },
        { id: 's2_rival_stay_bad', text: { zh: '公司半年后大裁员，留下来的人也没能幸免。', en: 'Company had mass layoffs six months later. Staying didn\'t help.' }, effects: { safety: -10, finance: -15 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '跳槽', en: 'Switch jobs' },
      effects: { finance: 20, safety: -15, network: -10 },
      outcomes: [
        { id: 's2_rival_switch_good', text: { zh: '新公司发展迅猛，你成了核心团队成员！', en: 'New company is booming. You became a core team member!' }, effects: { finance: 25, skill: 10, safety: -5 }, weight: 35 },
        { id: 's2_rival_switch_mid', text: { zh: '薪资翻倍，但适应新环境花了些时间。', en: 'Salary doubled, but adjusting to the new environment took time.' }, effects: { finance: 20, safety: -15, network: -10 }, weight: 40 },
        { id: 's2_rival_switch_bad', text: { zh: '新公司不靠谱，三个月后又倒闭了……', en: 'New company was unreliable. Shut down three months later...' }, effects: { finance: -10, safety: -20, network: -15 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_boss_lead_ai_project',
    character: 'boss',
    text: { zh: '"AI 转型项目需要负责人，你来？"', en: '"AI transformation project needs a lead. You?"' },
    leftChoice: {
      label: { zh: '太冒险', en: 'Too risky' },
      effects: { safety: 10, skill: -10 },
      outcomes: [
        { id: 's2_lead_ai_left_good', text: { zh: '别人接了项目后搞砸了，老板后悔没听你的保守建议。', en: 'Someone else took the project and botched it. Boss regretted not heeding your caution.' }, effects: { safety: 15, network: 5 }, weight: 35 },
        { id: 's2_lead_ai_left_mid', text: { zh: '项目交给了别人，你继续做手头的事，波澜不惊。', en: 'Project went to someone else. You kept doing your thing. Uneventful.' }, effects: { safety: 10, skill: -10 }, weight: 40 },
        { id: 's2_lead_ai_left_bad', text: { zh: '接手的同事借此升了职，老板觉得你缺乏魄力。', en: 'The colleague who took it got promoted. Boss thinks you lack initiative.' }, effects: { safety: -5, network: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '接手', en: 'Take charge' },
      effects: { skill: 15, network: 10, safety: -15 },
      outcomes: [
        { id: 's2_lead_ai_right_good', text: { zh: '项目大获成功，你成了公司 AI 转型的功臣！', en: "Project was a huge success. You became the hero of the company's AI transformation!" }, effects: { skill: 20, network: 15, finance: 10 }, weight: 35 },
        { id: 's2_lead_ai_right_mid', text: { zh: '项目磕磕绊绊推进中，虽然累但学到不少。', en: 'Project is bumpy but progressing. Exhausting, but you learned a lot.' }, effects: { skill: 15, network: 10, safety: -15 }, weight: 40 },
        { id: 's2_lead_ai_right_bad', text: { zh: '项目严重超预算，老板把锅甩给你，你成了全公司的靶子。', en: 'Project went way over budget. Boss blamed you. You became the company scapegoat.' }, effects: { safety: -20, network: -15 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_colleague_startup_idea',
    character: 'colleague',
    text: { zh: '"我要出去创业做 AI 产品，一起？"', en: '"I\'m starting an AI startup. Join me?"' },
    leftChoice: {
      label: { zh: '不去', en: 'No way' },
      effects: { safety: 10 },
      outcomes: [
        { id: 's2_startup_no_good', text: { zh: '同事创业失败了，你庆幸没跟着去。', en: 'Colleague\'s startup failed. You\'re glad you didn\'t join.' }, effects: { safety: 15 }, weight: 35 },
        { id: 's2_startup_no_mid', text: { zh: '继续上班，平淡但安稳。', en: 'Kept your job. Steady and stable.' }, effects: { safety: 10 }, weight: 40 },
        { id: 's2_startup_no_bad', text: { zh: '同事创业成功上市了……你后悔得捶墙。', en: 'Colleague\'s startup IPO\'d... You\'re kicking yourself.' }, effects: { safety: 5, finance: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '辞职创业', en: 'Quit and join' },
      effects: { finance: -20, skill: 15, network: 10 },
      outcomes: [
        { id: 's2_startup_yes_good', text: { zh: '创业产品大火，拿到了 A 轮融资！', en: 'Startup product went viral. Secured Series A funding!' }, effects: { finance: 10, skill: 20, network: 15 }, weight: 30 },
        { id: 's2_startup_yes_mid', text: { zh: '创业艰难但学到了很多，产品在运营中。', en: 'Startup is tough but educational. Product is live.' }, effects: { finance: -20, skill: 15, network: 10 }, weight: 40 },
        { id: 's2_startup_yes_bad', text: { zh: '烧光积蓄，产品上线无人问津，合伙人还跑了。', en: 'Burned savings. Product flopped. Co-founder bailed.' }, effects: { finance: -25, safety: -15, network: -10 }, weight: 30 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_ai_industry_report',
    character: 'ai',
    text: { zh: '"报告显示你所在行业 40% 岗位将被 AI 取代。"', en: '"Report: 40% of jobs in your industry will be replaced by AI."' },
    leftChoice: {
      label: { zh: '不信', en: "Don't buy it" },
      effects: { safety: -10 },
      outcomes: [
        { id: 's2_industry_report_left_good', text: { zh: '报告果然夸大其词，你的行业反而逆势增长了。', en: 'Report was indeed exaggerated. Your industry actually grew against the trend.' }, effects: { safety: 10 }, weight: 35 },
        { id: 's2_industry_report_left_mid', text: { zh: '短期内没什么变化，但心里总有点不踏实。', en: 'Nothing changed short-term, but a nagging unease lingers.' }, effects: { safety: -10 }, weight: 40 },
        { id: 's2_industry_report_left_bad', text: { zh: '半年后公司开始大规模引入 AI，你的岗位首当其冲。', en: 'Six months later the company rolled out AI en masse. Your role was first to go.' }, effects: { safety: -20, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '未雨绸缪', en: 'Prepare now' },
      effects: { skill: 10, safety: 5, finance: -10 },
      outcomes: [
        { id: 's2_industry_report_right_good', text: { zh: '提前学的 AI 技能派上大用场，你成了部门转型顾问！', en: "AI skills you learned early proved invaluable. You became the department's transformation advisor!" }, effects: { skill: 15, network: 10, finance: 5 }, weight: 35 },
        { id: 's2_industry_report_right_mid', text: { zh: '花了时间精力做准备，目前还看不到回报。', en: 'Invested time and energy preparing. No payoff visible yet.' }, effects: { skill: 10, safety: 5, finance: -10 }, weight: 40 },
        { id: 's2_industry_report_right_bad', text: { zh: '花大钱考了一堆证书，结果行业变革方向完全不同。', en: 'Spent big on certifications. Industry shifted in a completely different direction.' }, effects: { skill: -5, finance: -15 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_senior_promote_tip',
    character: 'senior',
    text: { zh: '"想升管理层？得学会放弃技术执念。"', en: '"Want management? Learn to let go of tech obsession."' },
    leftChoice: {
      label: { zh: '走技术路', en: 'Stay technical' },
      effects: { skill: 15, network: -10 },
      outcomes: [
        { id: 's2_promote_tip_left_good', text: { zh: '深耕技术让你成了不可替代的架构师，薪资反超管理层。', en: 'Deep tech expertise made you an irreplaceable architect. Salary surpassed management.' }, effects: { skill: 20, finance: 15 }, weight: 35 },
        { id: 's2_promote_tip_left_mid', text: { zh: '技术能力提升了，但感觉天花板越来越近。', en: 'Technical skills improved, but the ceiling feels closer and closer.' }, effects: { skill: 15, network: -10 }, weight: 40 },
        { id: 's2_promote_tip_left_bad', text: { zh: '公司重组，纯技术岗被合并，你的团队被打散了。', en: 'Company restructured. Pure tech roles merged. Your team was dissolved.' }, effects: { skill: 5, network: -15, safety: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '转管理', en: 'Go management' },
      effects: { network: 15, skill: -10, finance: 10 },
      outcomes: [
        { id: 's2_promote_tip_right_good', text: { zh: '管理之路出奇顺利，半年后升了总监！', en: 'Management track went surprisingly well. Promoted to director in six months!' }, effects: { network: 20, finance: 15 }, weight: 35 },
        { id: 's2_promote_tip_right_mid', text: { zh: '管人比写代码累多了，但收入确实涨了。', en: 'Managing people is way harder than coding, but income did go up.' }, effects: { network: 15, skill: -10, finance: 10 }, weight: 40 },
        { id: 's2_promote_tip_right_bad', text: { zh: '下属不服管，项目延期，你两头不讨好。', en: 'Team resisted your leadership. Project delayed. You pleased no one.' }, effects: { network: -10, safety: -15 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_hr_relocation',
    character: 'hr',
    text: { zh: '"总部有个好机会但需要外派，考虑吗？"', en: '"Great opportunity at HQ but requires relocation. Interested?"' },
    leftChoice: {
      label: { zh: '不去', en: 'Stay here' },
      effects: { safety: 5, network: 5 },
      outcomes: [
        { id: 's2_relocation_left_good', text: { zh: '留下后本地团队拿到了大项目，你是核心成员。', en: "Local team landed a big project after you stayed. You're a core member." }, effects: { safety: 10, network: 10, skill: 5 }, weight: 35 },
        { id: 's2_relocation_left_mid', text: { zh: '生活没什么变化，稳定但也没什么惊喜。', en: 'Life stayed the same. Stable, but no surprises.' }, effects: { safety: 5, network: 5 }, weight: 40 },
        { id: 's2_relocation_left_bad', text: { zh: '去外派的同事混得风生水起，你被边缘化了。', en: 'Colleague who relocated is thriving. You got sidelined.' }, effects: { safety: -5, network: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '外派', en: 'Relocate' },
      effects: { finance: 15, network: -15, skill: 10 },
      outcomes: [
        { id: 's2_relocation_right_good', text: { zh: '总部资源丰富，你的项目一路绿灯，还认识了大佬。', en: 'HQ resources were abundant. Project sailed through. Met influential people.' }, effects: { finance: 20, network: 10, skill: 15 }, weight: 35 },
        { id: 's2_relocation_right_mid', text: { zh: '异地生活不容易，但工作确实学到了新东西。', en: 'Living away from home is tough, but you learned new things at work.' }, effects: { finance: 15, network: -15, skill: 10 }, weight: 40 },
        { id: 's2_relocation_right_bad', text: { zh: '水土不服加上远离家人，身心俱疲，半年后申请调回。', en: 'Culture shock plus being away from family. Burned out. Requested transfer back after six months.' }, effects: { finance: -5, safety: -15, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_boss_budget_cut',
    character: 'boss',
    text: { zh: '"预算砍了一半，你的团队要缩编。"', en: '"Budget cut in half. Your team needs to shrink."' },
    leftChoice: {
      label: { zh: '裁人', en: 'Cut staff' },
      effects: { finance: 10, network: -15 },
      outcomes: [
        { id: 's2_budget_cut_left_good', text: { zh: '精简后团队效率反而提高了，老板很满意。', en: 'Leaner team became more efficient. Boss was pleased.' }, effects: { finance: 15, skill: 5 }, weight: 35 },
        { id: 's2_budget_cut_left_mid', text: { zh: '裁员完成了，剩下的人压力山大但还在撑。', en: 'Layoffs done. Remaining team is stressed but holding on.' }, effects: { finance: 10, network: -15 }, weight: 40 },
        { id: 's2_budget_cut_left_bad', text: { zh: '被裁的人在社交媒体上曝光了你，行业口碑崩了。', en: 'Laid-off staff exposed you on social media. Your industry reputation tanked.' }, effects: { network: -20, safety: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '争取保住', en: 'Fight to keep' },
      effects: { network: 10, safety: -10, finance: -10 },
      outcomes: [
        { id: 's2_budget_cut_right_good', text: { zh: '你据理力争说服了高层，团队完整保留，士气大振！', en: 'You convinced upper management. Team kept intact. Morale soared!' }, effects: { network: 15, safety: 5 }, weight: 35 },
        { id: 's2_budget_cut_right_mid', text: { zh: '保住了大部分人，但预算紧张，项目缩水了。', en: 'Kept most of the team, but tight budget meant scaled-down projects.' }, effects: { network: 10, safety: -10, finance: -10 }, weight: 40 },
        { id: 's2_budget_cut_right_bad', text: { zh: '老板觉得你不识大体，把你也列入了优化名单。', en: "Boss thought you couldn't see the big picture. Added you to the optimization list." }, effects: { safety: -20, network: -5 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_colleague_invest_ai',
    character: 'colleague',
    text: { zh: '"AI 概念股暴涨，一起投点？"', en: '"AI stocks skyrocketing. Invest together?"' },
    leftChoice: {
      label: { zh: '不碰', en: 'Not touching it' },
      effects: { finance: 5 },
      outcomes: [
        { id: 's2_invest_ai_left_good', text: { zh: 'AI 股果然崩盘了，你成了朋友圈里最清醒的人。', en: 'AI stocks crashed as expected. You were the wisest person in your circle.' }, effects: { finance: 10, safety: 5 }, weight: 35 },
        { id: 's2_invest_ai_left_mid', text: { zh: '没投也没亏，看着别人的账户上蹿下跳。', en: "Didn't invest, didn't lose. Watched others' portfolios rollercoaster." }, effects: { finance: 5 }, weight: 40 },
        { id: 's2_invest_ai_left_bad', text: { zh: 'AI 股一路暴涨，同事赚翻了，你酸得睡不着。', en: 'AI stocks kept soaring. Colleague made a fortune. You lost sleep from envy.' }, effects: { finance: -5, safety: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '投资', en: 'Invest' },
      effects: { finance: 15, safety: -10 },
      outcomes: [
        { id: 's2_invest_ai_right_good', text: { zh: '踩准了节奏，AI 股翻了三倍，提前财务自由！', en: 'Perfect timing. AI stocks tripled. Early financial freedom!' }, effects: { finance: 20, safety: 5 }, weight: 35 },
        { id: 's2_invest_ai_right_mid', text: { zh: '小赚一笔，但整天盯盘影响了工作状态。', en: 'Made a small profit, but constant chart-watching hurt your work performance.' }, effects: { finance: 15, safety: -10 }, weight: 40 },
        { id: 's2_invest_ai_right_bad', text: { zh: '泡沫破了，血亏一大笔，同事也不跟你说话了。', en: 'Bubble burst. Lost big. Colleague stopped talking to you too.' }, effects: { finance: -20, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_ai_workflow_automation',
    character: 'ai',
    text: { zh: '"你的日常工作流程已经可以完全自动化了。"', en: '"Your daily workflow can now be fully automated."' },
    leftChoice: {
      label: { zh: '拒绝自动化', en: 'Refuse automation' },
      effects: { safety: -10, skill: 10 },
      outcomes: [
        { id: 's2_ai_workflow_left_good', text: { zh: '你坚持手动操作，意外发现了自动化工具的严重bug，老板对你刮目相看。', en: 'By doing things manually, you caught a critical bug in the automation tool. Boss is impressed.' }, effects: { safety: 10, skill: 15, network: 5 }, weight: 35 },
        { id: 's2_ai_workflow_left_mid', text: { zh: '手动工作效率虽低，但你对流程的理解比谁都深。', en: 'Manual work is slower, but your process understanding is deeper than anyone else\'s.' }, effects: { safety: -5, skill: 10 }, weight: 40 },
        { id: 's2_ai_workflow_left_bad', text: { zh: '同事们早早下班，你还在手动处理数据，老板开始质疑你的效率。', en: 'Colleagues leave early while you\'re still processing data manually. Boss questions your efficiency.' }, effects: { safety: -15, skill: 5, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '拥抱自动化', en: 'Embrace it' },
      effects: { safety: -5, skill: -10, finance: 10 },
      outcomes: [
        { id: 's2_ai_workflow_right_good', text: { zh: '自动化帮你腾出大量时间，你用这些时间学了新技能，还接了私活。', en: 'Automation freed up tons of time. You learned new skills and took on freelance work.' }, effects: { safety: 5, skill: 10, finance: 15 }, weight: 35 },
        { id: 's2_ai_workflow_right_mid', text: { zh: '自动化运转正常，但你开始觉得自己像个按按钮的机器人。', en: 'Automation runs fine, but you start feeling like a button-pressing robot.' }, effects: { safety: -5, finance: 10 }, weight: 40 },
        { id: 's2_ai_workflow_right_bad', text: { zh: '自动化脚本半夜出错，删了一批重要数据，你背了锅。', en: 'Automation script glitched at midnight and deleted critical data. You took the blame.' }, effects: { safety: -20, skill: -10, finance: -10 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_headhunter_overseas',
    character: 'headhunter',
    text: { zh: '"海外有个高薪远程岗，有兴趣吗？"', en: '"High-paying remote job overseas. Interested?"' },
    leftChoice: {
      label: { zh: '不考虑', en: 'Not interested' },
      effects: { safety: 5 },
      outcomes: [
        { id: 's2_headhunter_overseas_left_good', text: { zh: '你留在国内，正好赶上公司上市，拿了一笔不错的期权。', en: 'You stayed and the company went IPO. Your stock options paid off nicely.' }, effects: { safety: 10, finance: 15 }, weight: 35 },
        { id: 's2_headhunter_overseas_left_mid', text: { zh: '日子照旧过，偶尔想想海外那份工作，也就一闪而过。', en: 'Life goes on as usual. Sometimes you wonder about that overseas job, but the thought fades.' }, effects: { safety: 5 }, weight: 40 },
        { id: 's2_headhunter_overseas_left_bad', text: { zh: '公司突然裁员，你后悔没早点考虑那份海外offer。', en: 'Company suddenly laid people off. You regret not considering that overseas offer earlier.' }, effects: { safety: -10, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '了解一下', en: 'Tell me more' },
      effects: { finance: 15, network: -10, safety: -5 },
      outcomes: [
        { id: 's2_headhunter_overseas_right_good', text: { zh: '远程工作拿着美元薪资，生活质量飙升，还认识了一群海外大佬。', en: 'Remote work with a dollar salary. Quality of life soared and you met top overseas professionals.' }, effects: { finance: 20, network: 10, skill: 5 }, weight: 35 },
        { id: 's2_headhunter_overseas_right_mid', text: { zh: '工作还行，但时差让你日夜颠倒，社交圈越来越小。', en: 'Job is decent, but the time zone difference flipped your schedule. Social circle shrinking.' }, effects: { finance: 15, network: -10, safety: -5 }, weight: 40 },
        { id: 's2_headhunter_overseas_right_bad', text: { zh: '入职才发现是外包岗，薪资被中间商吃了一大截，还没有社保。', en: 'Turns out it was a contractor role. Middleman took a huge cut and no benefits.' }, effects: { finance: -10, safety: -15, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_boss_ai_ethics',
    character: 'boss',
    text: { zh: '"公司AI产品出了伦理问题，你负责善后？"', en: '"Company AI product has ethics issues. Handle it?"' },
    leftChoice: {
      label: { zh: '不碰', en: 'Stay away' },
      effects: { safety: 10, network: -10 },
      outcomes: [
        { id: 's2_boss_ai_ethics_left_good', text: { zh: '你避开了这个坑，后来项目果然被监管部门点名，接手的人被问责了。', en: 'You dodged a bullet. The project got flagged by regulators and the person who took it got blamed.' }, effects: { safety: 15, skill: 5 }, weight: 35 },
        { id: 's2_boss_ai_ethics_left_mid', text: { zh: '老板虽然不太高兴，但也没为难你，只是以后好项目轮不到你了。', en: 'Boss wasn\'t thrilled but didn\'t push it. Just no more good projects coming your way.' }, effects: { safety: 10, network: -10 }, weight: 40 },
        { id: 's2_boss_ai_ethics_left_bad', text: { zh: '老板觉得你不够担当，年终评估给了个C，年终奖泡汤。', en: 'Boss sees you as lacking initiative. Got a C rating at year-end review. Bonus gone.' }, effects: { safety: 5, network: -15, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '接手', en: 'Take over' },
      effects: { safety: -10, network: 15, skill: 10 },
      outcomes: [
        { id: 's2_boss_ai_ethics_right_good', text: { zh: '你成功化解了伦理危机，公司声誉反而提升了，你成了管理层的红人。', en: 'You resolved the ethics crisis brilliantly. Company reputation improved and you became management\'s favorite.' }, effects: { safety: 10, network: 20, skill: 10 }, weight: 35 },
        { id: 's2_boss_ai_ethics_right_mid', text: { zh: '问题勉强解决了，但过程中得罪了不少人，功过相抵。', en: 'Problem mostly solved, but you offended several people along the way. Gains and losses balanced out.' }, effects: { safety: -5, network: 5, skill: 10 }, weight: 40 },
        { id: 's2_boss_ai_ethics_right_bad', text: { zh: '伦理问题越挖越深，媒体曝光后你成了替罪羊，简历上多了个污点。', en: 'The deeper you dug, the worse it got. Media exposed it and you became the scapegoat.' }, effects: { safety: -20, network: -10, skill: -5 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_colleague_burnout',
    character: 'colleague',
    text: { zh: '"我快要累死了，你呢？要不一起请假？"', en: '"I\'m burning out. You too? Take time off together?"' },
    leftChoice: {
      label: { zh: '继续卷', en: 'Keep grinding' },
      effects: { skill: 10, safety: -15 },
      outcomes: [
        { id: 's2_colleague_burnout_left_good', text: { zh: '坚持扛了下来，季度末拿到了最佳员工奖和丰厚奖金。', en: 'You pushed through and won Employee of the Quarter with a fat bonus.' }, effects: { skill: 15, finance: 15 }, weight: 35 },
        { id: 's2_colleague_burnout_left_mid', text: { zh: '虽然累到不行，但项目按时交付了，老板点了个赞。', en: 'Exhausted but the project shipped on time. Boss gave you a thumbs up.' }, effects: { skill: 10, safety: -10 }, weight: 40 },
        { id: 's2_colleague_burnout_left_bad', text: { zh: '连续加班三周后你进了医院，医生说再这样下去会出大问题。', en: 'Three weeks of overtime landed you in the hospital. Doctor said you\'re heading for serious trouble.' }, effects: { safety: -20, skill: -5, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '休息', en: 'Take a break' },
      effects: { safety: 15, skill: -10 },
      outcomes: [
        { id: 's2_colleague_burnout_right_good', text: { zh: '休假回来精力充沛，效率翻倍，一周干完了别人两周的活。', en: 'Came back from break fully recharged. Doubled your output and finished two weeks\' work in one.' }, effects: { safety: 15, skill: 10, finance: 5 }, weight: 35 },
        { id: 's2_colleague_burnout_right_mid', text: { zh: '休息了几天感觉好多了，但回来发现落下的工作堆成山。', en: 'A few days off felt great, but the pile of work waiting for you was mountainous.' }, effects: { safety: 10, skill: -5 }, weight: 40 },
        { id: 's2_colleague_burnout_right_bad', text: { zh: '请假期间项目出了紧急状况，领导打了十几个电话催你回来，假没休成还被记了一笔。', en: 'Emergency hit during your leave. Boss called a dozen times to drag you back. No rest and a mark on your record.' }, effects: { safety: -5, skill: -10, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  {
    id: 's2_senior_financial_plan',
    character: 'senior',
    text: { zh: '"该考虑买房了，趁利率低。"', en: '"Time to buy property. Interest rates are low."' },
    leftChoice: {
      label: { zh: '再等等', en: 'Wait longer' },
      effects: { finance: 10 },
      outcomes: [
        { id: 's2_senior_financial_left_good', text: { zh: '你等了半年，房价果然跌了，用更低的价格买到了心仪的房子。', en: 'You waited six months and prices dropped. Got your dream place at a lower price.' }, effects: { finance: 15, safety: 10 }, weight: 35 },
        { id: 's2_senior_financial_left_mid', text: { zh: '房价没怎么变，你的存款倒是又多了一些，继续观望中。', en: 'Prices stayed flat. Your savings grew a bit more. Still watching and waiting.' }, effects: { finance: 10 }, weight: 40 },
        { id: 's2_senior_financial_left_bad', text: { zh: '利率突然飙升，房价也涨了一波，你错过了最好的上车时机。', en: 'Interest rates spiked and prices surged. You missed the best window to buy.' }, effects: { finance: -10, safety: -5 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '买房', en: 'Buy now' },
      effects: { safety: 10, finance: -20 },
      outcomes: [
        { id: 's2_senior_financial_right_good', text: { zh: '买完后房价涨了20%，邻居们都羡慕你入场早，生活也安定下来了。', en: 'Prices jumped 20% after you bought. Neighbors envy your timing and life feels settled.' }, effects: { safety: 15, finance: 15 }, weight: 35 },
        { id: 's2_senior_financial_right_mid', text: { zh: '月供压力不小，但至少有了自己的窝，每天回家心里踏实。', en: 'Mortgage payments are tough, but having your own place feels grounding.' }, effects: { safety: 10, finance: -15 }, weight: 40 },
        { id: 's2_senior_financial_right_bad', text: { zh: '买完就遇上经济下行，房价跌了，每月还贷压得你喘不过气。', en: 'Economy tanked right after you bought. Prices fell and monthly payments are crushing you.' }, effects: { safety: -10, finance: -20 }, weight: 25 },
      ],
    },
    stage: 2,
  },
  // Career-specific: programmer
  {
    id: 's2_ai_code_entire_module',
    character: 'ai',
    text: { zh: '"AI 已经可以独立完成整个模块的开发了。"', en: '"AI can now build entire modules independently."' },
    leftChoice: {
      label: { zh: '坚持手写', en: 'Code manually' },
      effects: { skill: 10, safety: -15 },
      outcomes: [
        { id: 's2_ai_code_left_good', text: { zh: '你对底层原理的理解让你成了团队中不可替代的人。', en: 'Your deep understanding of fundamentals made you irreplaceable on the team.' }, effects: { skill: 15, network: 10 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's2_ai_code_left_mid', text: { zh: '手写代码效率虽低，但质量还不错。', en: 'Manual coding was slower, but quality held up.' }, effects: { skill: 10, safety: -10 }, weight: 40 },
        { id: 's2_ai_code_left_bad', text: { zh: '项目进度严重落后，老板对你很不满。', en: 'Project fell way behind schedule. Boss is very unhappy.' }, effects: { skill: 5, safety: -20, network: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '转向架构', en: 'Move to architecture' },
      effects: { skill: 15, safety: -5 },
      outcomes: [
        { id: 's2_ai_code_right_good', text: { zh: '你设计的架构被全公司采纳，AI 负责实现，效率翻倍！', en: 'Your architecture was adopted company-wide. AI handles implementation, doubling efficiency!' }, effects: { skill: 20, network: 10, finance: 10 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's2_ai_code_right_mid', text: { zh: '架构转型还在适应中，学到了不少新东西。', en: 'Still adapting to the architecture role, but learning a lot.' }, effects: { skill: 15, safety: -5 }, weight: 40 },
        { id: 's2_ai_code_right_bad', text: { zh: '架构设计失误，AI 生成的代码全是 bug，你背锅了。', en: 'Architecture design flaw. AI-generated code was full of bugs. You took the blame.' }, effects: { skill: 10, safety: -15, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['programmer'],
  },
  {
    id: 's2_headhunter_tech_lead',
    character: 'headhunter',
    text: { zh: '"有家 AI 公司找技术负责人，薪资翻倍。"', en: '"AI company looking for tech lead. Double salary."' },
    leftChoice: {
      label: { zh: '留下', en: 'Stay' },
      effects: { safety: 10 },
      outcomes: [
        { id: 's2_tech_lead_left_good', text: { zh: '公司感念你的忠诚，给你升了副总监。', en: 'Company rewarded your loyalty with a VP of Engineering title.' }, effects: { safety: 15, network: 10, finance: 10 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's2_tech_lead_left_mid', text: { zh: '一切照旧，稳定但没什么变化。', en: 'Business as usual. Stable but uneventful.' }, effects: { safety: 10 }, weight: 40 },
        { id: 's2_tech_lead_left_bad', text: { zh: '原公司被收购，你的职位变得尴尬。', en: 'Company got acquired. Your position became awkward.' }, effects: { safety: -10, network: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '跳过去', en: 'Switch' },
      effects: { finance: 20, safety: -15, skill: 10 },
      outcomes: [
        { id: 's2_tech_lead_right_good', text: { zh: '新公司上市了，你的期权翻了好几倍！', en: 'New company went public. Your stock options multiplied!' }, effects: { finance: 20, skill: 15, network: 10 }, weight: 35, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's2_tech_lead_right_mid', text: { zh: '新环境压力大，但薪资确实涨了不少。', en: 'High pressure environment, but the pay raise is real.' }, effects: { finance: 15, safety: -10, skill: 10 }, weight: 40 },
        { id: 's2_tech_lead_right_bad', text: { zh: 'AI 公司烧完钱倒闭了，你又要重新找工作。', en: 'AI company burned through funding and shut down. Back to job hunting.' }, effects: { finance: -15, safety: -20 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['programmer'],
  },
  // Career-specific: designer
  {
    id: 's2_boss_ai_replaces_junior_design',
    character: 'boss',
    text: { zh: '"AI 出图比初级设计师快10倍，还要招人吗？"', en: '"AI generates visuals 10x faster than juniors. Still hire?"' },
    leftChoice: {
      label: { zh: '继续招', en: 'Keep hiring' },
      effects: { network: 10, finance: -10 },
      outcomes: [
        { id: 's2_junior_design_left_good', text: { zh: '新招的设计师带来了全新的创意视角，项目大获成功。', en: 'New hire brought fresh creative perspectives. Project was a huge success.' }, effects: { network: 15, skill: 10 }, weight: 35, careerWeightModifiers: { designer: 1.5 } },
        { id: 's2_junior_design_left_mid', text: { zh: '团队扩张了，人力成本高但产出稳定。', en: 'Team expanded. Higher costs but steady output.' }, effects: { network: 10, finance: -10 }, weight: 40 },
        { id: 's2_junior_design_left_bad', text: { zh: '新人产出远不如 AI，老板质疑你的决定。', en: 'New hire\'s output couldn\'t match AI. Boss questioned your decision.' }, effects: { finance: -15, safety: -10, network: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '用 AI', en: 'Use AI instead' },
      effects: { safety: -10, finance: 10 },
      outcomes: [
        { id: 's2_junior_design_right_good', text: { zh: '你用 AI 建立了高效的设计流水线，成了行业标杆！', en: 'You built an efficient AI design pipeline. Became an industry benchmark!' }, effects: { finance: 15, skill: 15 }, weight: 35, careerWeightModifiers: { designer: 1.5 } },
        { id: 's2_junior_design_right_mid', text: { zh: 'AI 出图速度快，但偶尔需要手动调整。', en: 'AI was fast but occasionally needed manual tweaks.' }, effects: { safety: -10, finance: 10 }, weight: 40 },
        { id: 's2_junior_design_right_bad', text: { zh: 'AI 生成的设计风格千篇一律，客户投诉设计没创意。', en: 'AI designs all looked the same. Clients complained about lack of creativity.' }, effects: { safety: -15, network: -15, finance: -10 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['designer'],
  },
  {
    id: 's2_colleague_design_agency',
    character: 'colleague',
    text: { zh: '"我们合伙开个 AI 设计工作室？"', en: '"Start an AI design studio together?"' },
    leftChoice: {
      label: { zh: '风险大', en: 'Too risky' },
      effects: { safety: 10 },
      outcomes: [
        { id: 's2_design_agency_left_good', text: { zh: '同事的工作室倒闭了，你庆幸当初没跟风。', en: 'Colleague\'s studio went under. Glad you didn\'t follow.' }, effects: { safety: 15 }, weight: 35, careerWeightModifiers: { designer: 1.5 } },
        { id: 's2_design_agency_left_mid', text: { zh: '生活没什么变化，继续在公司当设计师。', en: 'Nothing changed. Still working as a designer at the company.' }, effects: { safety: 10 }, weight: 40 },
        { id: 's2_design_agency_left_bad', text: { zh: '同事的工作室大获成功，你有些后悔。', en: 'Colleague\'s studio took off. You feel some regret.' }, effects: { safety: 10, skill: -10, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '开干', en: 'Let\'s go' },
      effects: { finance: -15, skill: 15, network: 10 },
      outcomes: [
        { id: 's2_design_agency_right_good', text: { zh: '工作室第一年就盈利了，还拿了设计大奖！', en: 'Studio turned profit in year one and won a design award!' }, effects: { finance: 20, skill: 15, network: 15 }, weight: 35, careerWeightModifiers: { designer: 1.5 } },
        { id: 's2_design_agency_right_mid', text: { zh: '工作室还在摸索阶段，收入不稳定但学到很多。', en: 'Studio is still finding its footing. Income unstable but learning a lot.' }, effects: { finance: -10, skill: 15, network: 10 }, weight: 40 },
        { id: 's2_design_agency_right_bad', text: { zh: '创业消耗太大，合伙人闹矛盾，工作室半年就散了。', en: 'Startup drained resources. Partners clashed. Studio folded in six months.' }, effects: { finance: -20, network: -15, safety: -10 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['designer'],
  },
  // Career-specific: teacher
  {
    id: 's2_ai_personalized_tutoring',
    character: 'ai',
    text: { zh: '"AI 个性化辅导比班级授课效果好3倍。"', en: '"AI personalized tutoring is 3x more effective than classes."' },
    leftChoice: {
      label: { zh: '不信', en: 'Skeptical' },
      effects: { safety: -10 },
      outcomes: [
        { id: 's2_ai_tutor_left_good', text: { zh: '你的传统教学法在对比实验中意外胜出，得到了表彰。', en: 'Your traditional methods unexpectedly won in a comparison study. Got recognition.' }, effects: { safety: 10, network: 10 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's2_ai_tutor_left_mid', text: { zh: '其他老师都在用 AI，你感到有些落后。', en: 'Other teachers are using AI. You feel a bit behind.' }, effects: { safety: -10, skill: -10 }, weight: 40 },
        { id: 's2_ai_tutor_left_bad', text: { zh: '学生家长投诉你教学方式过时，校长找你谈话了。', en: 'Parents complained your teaching is outdated. Principal called you in.' }, effects: { safety: -15, network: -15 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '融入教学', en: 'Integrate AI' },
      effects: { skill: 15, safety: -5 },
      outcomes: [
        { id: 's2_ai_tutor_right_good', text: { zh: '你的 AI 辅助教学班成绩全校第一，教育局来观摩！', en: 'Your AI-assisted class ranked #1 in school. Education bureau came to observe!' }, effects: { skill: 20, network: 15 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's2_ai_tutor_right_mid', text: { zh: '学生成绩有所提升，但适应期比想象中长。', en: 'Student grades improved, but the adjustment period was longer than expected.' }, effects: { skill: 15, safety: -5 }, weight: 40 },
        { id: 's2_ai_tutor_right_bad', text: { zh: '学生过度依赖 AI 辅导，独立思考能力下降了。', en: 'Students became over-reliant on AI tutoring. Independent thinking declined.' }, effects: { skill: 10, safety: -15, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['teacher'],
  },
  {
    id: 's2_hr_school_reform',
    character: 'hr',
    text: { zh: '"学校要大改革，你愿意加入改革委员会吗？"', en: '"School is reforming. Join the reform committee?"' },
    leftChoice: {
      label: { zh: '不参与', en: 'Pass' },
      effects: { safety: 10 },
      outcomes: [
        { id: 's2_school_reform_left_good', text: { zh: '改革搞得一团糟，没参与的你反而安稳度过。', en: 'Reform was a mess. You stayed out of it and stayed safe.' }, effects: { safety: 15 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's2_school_reform_left_mid', text: { zh: '改革跟你没关系，继续照常教书。', en: 'Reform didn\'t involve you. Kept teaching as usual.' }, effects: { safety: 10 }, weight: 40 },
        { id: 's2_school_reform_left_bad', text: { zh: '改革后你被调到了边缘部门，因为"没有参与精神"。', en: 'After reform, you got reassigned to a marginal department for "lacking initiative."' }, effects: { safety: -10, network: -15 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '参与', en: 'Join' },
      effects: { network: 15, safety: -10, skill: 10 },
      outcomes: [
        { id: 's2_school_reform_right_good', text: { zh: '改革大获成功，你被提拔为教研主任！', en: 'Reform was a success. You got promoted to Head of Teaching and Research!' }, effects: { network: 20, skill: 15, finance: 10 }, weight: 35, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's2_school_reform_right_mid', text: { zh: '改革推进中遇到阻力，但你学到了管理经验。', en: 'Reform met resistance, but you gained management experience.' }, effects: { network: 10, safety: -10, skill: 10 }, weight: 40 },
        { id: 's2_school_reform_right_bad', text: { zh: '改革派内部分裂，你被卷入派系斗争消耗很大。', en: 'Reform faction split internally. You got dragged into factional politics.' }, effects: { safety: -20, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['teacher'],
  },
  // Career-specific: doctor
  {
    id: 's2_ai_radiology_ai',
    character: 'ai',
    text: { zh: '"AI 影像诊断准确率已经超过了普通放射科医生。"', en: '"AI imaging diagnosis now outperforms average radiologists."' },
    leftChoice: {
      label: { zh: '不影响我', en: 'Doesn\'t affect me' },
      effects: { safety: -10 },
      outcomes: [
        { id: 's2_radiology_left_good', text: { zh: '你的临床经验在复杂病例中发挥了 AI 无法替代的作用。', en: 'Your clinical experience proved irreplaceable in complex cases where AI fell short.' }, effects: { safety: 10, skill: 10 }, weight: 35, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's2_radiology_left_mid', text: { zh: '短期内没受影响，但隐隐感到压力。', en: 'No impact for now, but you sense the pressure building.' }, effects: { safety: -10 }, weight: 40 },
        { id: 's2_radiology_left_bad', text: { zh: '医院引进 AI 影像系统后，你的科室被裁了一半人。', en: 'Hospital adopted AI imaging. Half your department was cut.' }, effects: { safety: -20, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '学习 AI 医疗', en: 'Learn AI medicine' },
      effects: { skill: 15, finance: -10 },
      outcomes: [
        { id: 's2_radiology_right_good', text: { zh: '你成了医院 AI 医疗的带头人，科研论文连发三篇！', en: 'You became the hospital\'s AI medicine leader. Published three research papers!' }, effects: { skill: 20, network: 15, finance: 10 }, weight: 35, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's2_radiology_right_mid', text: { zh: '学了不少 AI 知识，临床应用还在摸索。', en: 'Learned a lot about AI. Clinical application still in progress.' }, effects: { skill: 15, finance: -10 }, weight: 40 },
        { id: 's2_radiology_right_bad', text: { zh: '花了大量时间学 AI，本职医疗工作反而落下了。', en: 'Spent too much time on AI studies. Core medical work suffered.' }, effects: { skill: 10, safety: -15, finance: -15 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['doctor'],
  },
  {
    id: 's2_boss_private_practice',
    character: 'boss',
    text: { zh: '"有机会开私人诊所，但风险不小。"', en: '"Chance to open a private practice. Risky though."' },
    leftChoice: {
      label: { zh: '留在医院', en: 'Stay at hospital' },
      effects: { safety: 10 },
      outcomes: [
        { id: 's2_private_practice_left_good', text: { zh: '医院给你评了高级职称，待遇大幅提升。', en: 'Hospital gave you a senior title. Salary and benefits jumped significantly.' }, effects: { safety: 15, finance: 15 }, weight: 35, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's2_private_practice_left_mid', text: { zh: '稳定的工作，照常出门诊、查房。', en: 'Stable job. Same routine of outpatient visits and ward rounds.' }, effects: { safety: 10 }, weight: 40 },
        { id: 's2_private_practice_left_bad', text: { zh: '医院效益下滑，奖金被砍了一半。', en: 'Hospital revenue dropped. Bonuses were cut in half.' }, effects: { finance: -15, safety: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '开诊所', en: 'Open practice' },
      effects: { finance: 20, safety: -20 },
      outcomes: [
        { id: 's2_private_practice_right_good', text: { zh: '诊所口碑爆棚，回头客带来了稳定收入！', en: 'Practice reputation soared. Returning patients brought steady income!' }, effects: { finance: 20, network: 15, skill: 10 }, weight: 35, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's2_private_practice_right_mid', text: { zh: '诊所勉强维持，收入比医院稍好但压力大。', en: 'Practice barely breaking even. Slightly better pay than hospital but much more stress.' }, effects: { finance: 10, safety: -15 }, weight: 40 },
        { id: 's2_private_practice_right_bad', text: { zh: '诊所经营不善，医疗纠纷缠身，赔了不少钱。', en: 'Practice mismanaged. Medical disputes piled up. Lost a lot of money.' }, effects: { finance: -20, safety: -20, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['doctor'],
  },
  // Career-specific: content_creator
  {
    id: 's2_ai_deepfake_warning',
    character: 'ai',
    text: { zh: '"有人用 AI 仿造你的风格发内容了。"', en: '"Someone is using AI to mimic your content style."' },
    leftChoice: {
      label: { zh: '不管', en: 'Ignore it' },
      effects: { safety: -15, network: -10 },
      outcomes: [
        { id: 's2_deepfake_left_good', text: { zh: '山寨号自己消失了，你的粉丝还是认准正主。', en: 'The copycat account faded away. Your fans know the real deal.' }, effects: { safety: 10, network: 10 }, weight: 35, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's2_deepfake_left_mid', text: { zh: '你流失了一些粉丝，但核心受众还在。', en: 'Lost some followers, but your core audience stayed.' }, effects: { safety: -10, network: -10 }, weight: 40 },
        { id: 's2_deepfake_left_bad', text: { zh: '山寨号发了争议内容，粉丝以为是你发的，名誉受损严重。', en: 'Copycat posted controversial content. Fans thought it was you. Reputation seriously damaged.' }, effects: { safety: -20, network: -20 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '维权', en: 'Fight back' },
      effects: { safety: -5, network: 10, finance: -10 },
      outcomes: [
        { id: 's2_deepfake_right_good', text: { zh: '维权成功，还上了热搜，粉丝暴涨！', en: 'Won the case and went viral. Followers surged!' }, effects: { network: 20, finance: 10, safety: 10 }, weight: 35, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's2_deepfake_right_mid', text: { zh: '维权过程漫长，最终对方道歉了事。', en: 'Long legal battle. Eventually got an apology.' }, effects: { safety: -5, network: 10, finance: -10 }, weight: 40 },
        { id: 's2_deepfake_right_bad', text: { zh: '维权失败，律师费白花了，还被对方反咬一口。', en: 'Lost the case. Lawyer fees wasted. Got counter-sued.' }, effects: { finance: -20, safety: -15, network: -10 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['content_creator'],
  },
  {
    id: 's2_headhunter_mcn',
    character: 'headhunter',
    text: { zh: '"有 MCN 想签你，分成五五开。"', en: '"An MCN wants to sign you. 50-50 split."' },
    leftChoice: {
      label: { zh: '独立', en: 'Stay independent' },
      effects: { skill: 10, finance: -10 },
      outcomes: [
        { id: 's2_mcn_left_good', text: { zh: '你独立运营找到了变现模式，收入反超签约创作者。', en: 'You found a monetization model independently. Income surpassed signed creators.' }, effects: { skill: 15, finance: 15 }, weight: 35, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's2_mcn_left_mid', text: { zh: '独立创作自由度高，但收入增长缓慢。', en: 'Full creative freedom, but income growth is slow.' }, effects: { skill: 10, finance: -10 }, weight: 40 },
        { id: 's2_mcn_left_bad', text: { zh: '没有团队支持，几个月没出爆款，数据下滑严重。', en: 'Without team support, no viral hits for months. Metrics plummeted.' }, effects: { finance: -15, network: -15, safety: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '签约', en: 'Sign up' },
      effects: { finance: 20, network: 10, safety: -10 },
      outcomes: [
        { id: 's2_mcn_right_good', text: { zh: 'MCN 帮你对接了大品牌，商单收入翻了三倍！', en: 'MCN connected you with major brands. Sponsorship income tripled!' }, effects: { finance: 20, network: 15 }, weight: 35, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's2_mcn_right_mid', text: { zh: '有了团队支持，产出稳定了但创作自由度降低。', en: 'Team support stabilized output, but creative freedom decreased.' }, effects: { finance: 15, network: 10, skill: -10 }, weight: 40 },
        { id: 's2_mcn_right_bad', text: { zh: 'MCN 拿走大部分收入，还限制你接私活，后悔签约。', en: 'MCN took most of the revenue and restricted side deals. Regret signing.' }, effects: { finance: -10, safety: -15, skill: -10 }, weight: 25 },
      ],
    },
    stage: 2,
    careerIds: ['content_creator'],
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
      effects: { safety: -20, finance: 15 },
      outcomes: [
        { id: 's3_mass_sever_good', text: { zh: '拿到高额遣散费，用来进修了 AI 研究生课程。', en: 'Got a generous severance. Used it to fund an AI graduate program.' }, effects: { finance: 20, skill: 15 }, weight: 30 },
        { id: 's3_mass_sever_mid', text: { zh: '遣散费到手，但重新找工作花了好几个月。', en: 'Got the severance, but job hunting took months.' }, effects: { safety: -20, finance: 15 }, weight: 45 },
        { id: 's3_mass_sever_bad', text: { zh: '行业不景气，半年没找到工作，遣散费快花完了。', en: 'Industry downturn. No job for six months. Severance almost gone.' }, effects: { safety: -25, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '争取转岗', en: 'Fight for transfer' },
      effects: { safety: -10, network: -15, skill: 15 },
      outcomes: [
        { id: 's3_mass_transfer_good', text: { zh: '成功转到了 AI 应用部门，成为技术骨干！', en: 'Transferred to AI applications team. Became a tech lead!' }, effects: { skill: 25, safety: 5, network: 10 }, weight: 30, careerWeightModifiers: { programmer: 1.5, doctor: 1.3 } },
        { id: 's3_mass_transfer_mid', text: { zh: '转岗成功但岗位边缘化，前途未卜。', en: 'Transfer succeeded but role is marginal. Future uncertain.' }, effects: { safety: -10, network: -15, skill: 15 }, weight: 40 },
        { id: 's3_mass_transfer_bad', text: { zh: '争取了半天还是被裁了，还得罪了 HR。', en: 'Fought hard but still got laid off. And now HR is upset.' }, effects: { safety: -25, network: -20 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_ai_general_intelligence',
    character: 'ai',
    text: { zh: '"通用 AI 时代到来，大多数白领岗位都受影响。"', en: '"AGI era arrives. Most white-collar jobs affected."' },
    leftChoice: {
      label: { zh: '躺平', en: 'Give up' },
      effects: { safety: -20, skill: -15 },
      outcomes: [
        { id: 's3_agi_left_good', text: { zh: '躺平了半年后悟了：人类的创造力和情感无法被替代，你开了家手工咖啡馆。', en: 'After six months of doing nothing, you realized human creativity is irreplaceable. Opened a craft coffee shop.' }, effects: { safety: 15, finance: -15 }, weight: 30 },
        { id: 's3_agi_left_mid', text: { zh: '在家待了几个月，焦虑感并没有消退，存款也在慢慢减少。', en: 'Stayed home for months. Anxiety didn\'t fade and savings kept shrinking.' }, effects: { safety: -20, skill: -15 }, weight: 40 },
        { id: 's3_agi_left_bad', text: { zh: '彻底放弃后与社会脱节，再想回去发现连面试机会都没了。', en: 'Completely disconnected from society. When you tried to come back, couldn\'t even get an interview.' }, effects: { safety: -25, skill: -20, network: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '寻找新方向', en: 'Find new path' },
      effects: { skill: 20, safety: -10 },
      outcomes: [
        { id: 's3_agi_right_good', text: { zh: '你找到了人机协作的新模式，成了 AGI 时代的先驱者，各大媒体都来采访你。', en: 'You pioneered a new human-AI collaboration model. Became an AGI-era thought leader. Media lined up for interviews.' }, effects: { skill: 25, network: 20, finance: 15 }, weight: 30 },
        { id: 's3_agi_right_mid', text: { zh: '新方向有潜力但还在摸索中，至少比原地等待强。', en: 'New direction shows promise but still figuring it out. At least better than standing still.' }, effects: { skill: 20, safety: -10 }, weight: 40 },
        { id: 's3_agi_right_bad', text: { zh: '折腾了一圈发现新方向也被 AGI 碾压，精力和积蓄都耗尽了。', en: 'After all the effort, the new path got steamrolled by AGI too. Energy and savings depleted.' }, effects: { skill: -15, finance: -20, safety: -15 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_headhunter_exec_role',
    character: 'headhunter',
    text: { zh: '"有个 AI 公司找 CEO，年薪百万。"', en: '"AI company seeking CEO. Million-dollar salary."' },
    leftChoice: {
      label: { zh: '不够格', en: 'Not qualified' },
      effects: { safety: 15 },
      outcomes: [
        { id: 's3_exec_no_good', text: { zh: '继续在现公司深耕，成了不可替代的专家。', en: 'Stayed and deepened expertise. Became irreplaceable.' }, effects: { safety: 15, skill: 10 }, weight: 35 },
        { id: 's3_exec_no_mid', text: { zh: '谦虚地拒绝了，生活没什么变化。', en: 'Humbly declined. Life unchanged.' }, effects: { safety: 15 }, weight: 40 },
        { id: 's3_exec_no_bad', text: { zh: '后来那公司上市了，你错过了财务自由的机会。', en: 'That company IPO\'d later. You missed financial freedom.' }, effects: { safety: 5, finance: -10 }, weight: 25 },
      ],
    },
    rightChoice: {
      label: { zh: '试试', en: 'Go for it' },
      effects: { finance: 25, safety: -20, network: 15 },
      outcomes: [
        { id: 's3_exec_yes_good', text: { zh: '带领公司完成关键产品发布，成为行业传奇！', en: 'Led the company through a key product launch. Became an industry legend!' }, effects: { finance: 30, network: 25, skill: 15 }, weight: 25, careerWeightModifiers: { content_creator: 1.3 } },
        { id: 's3_exec_yes_mid', text: { zh: '压力巨大但学到了很多管理经验。', en: 'Immense pressure but gained invaluable management experience.' }, effects: { finance: 25, safety: -20, network: 15 }, weight: 40 },
        { id: 's3_exec_yes_bad', text: { zh: '公司内斗严重，半年后被董事会踢出了。', en: 'Office politics were brutal. Board kicked you out in six months.' }, effects: { safety: -25, network: -15, finance: 10 }, weight: 35 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_boss_final_pivot',
    character: 'boss',
    text: { zh: '"公司要做最后的 AI 转型，成败在此一举。"', en: '"Company\'s final AI pivot. All or nothing."' },
    leftChoice: {
      label: { zh: '找退路', en: 'Plan exit' },
      effects: { safety: 15, skill: -15 },
      outcomes: [
        { id: 's3_final_pivot_left_good', text: { zh: '退路找对了，跳到竞争对手那边成了核心骨干，薪资还涨了。', en: 'Exit plan worked perfectly. Joined a competitor as a core member with a raise.' }, effects: { safety: 20, finance: 15 }, weight: 30 },
        { id: 's3_final_pivot_left_mid', text: { zh: '找到了备选方案，但一直犹豫不决，最后不上不下。', en: 'Found a backup plan but kept hesitating. Ended up in limbo.' }, effects: { safety: 15, skill: -15 }, weight: 40 },
        { id: 's3_final_pivot_left_bad', text: { zh: '公司转型居然成功了！留下的人分了巨额奖金，你后悔得捶胸顿足。', en: 'The pivot actually succeeded! Those who stayed split a massive bonus. You regret everything.' }, effects: { safety: -15, finance: -20 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '全力以赴', en: 'Go all in' },
      effects: { skill: 20, finance: -15, safety: -15 },
      outcomes: [
        { id: 's3_final_pivot_right_good', text: { zh: '转型大获成功！你被提拔为新业务线负责人，公司股价翻了三倍。', en: 'Pivot was a smashing success! Promoted to head of new business line. Stock price tripled.' }, effects: { skill: 25, finance: 25, network: 15 }, weight: 30 },
        { id: 's3_final_pivot_right_mid', text: { zh: '转型艰难推进中，累到脱相但学了一身新本事。', en: 'Pivot is grinding forward painfully. Exhausting but you picked up a whole set of new skills.' }, effects: { skill: 20, finance: -15, safety: -15 }, weight: 40 },
        { id: 's3_final_pivot_right_bad', text: { zh: '公司转型失败，全员裁撤，你不仅没了工作还倒贴了项目尾款。', en: 'Company pivot failed. Everyone laid off. You lost your job and had to cover project debts.' }, effects: { skill: -15, finance: -25, safety: -20 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_colleague_old_friend',
    character: 'colleague',
    text: { zh: '"十年没联系的老同事找你合作，靠谱吗？"', en: '"Old colleague from 10 years ago wants to partner up. Legit?"' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Decline' },
      effects: { safety: 10 },
      outcomes: [
        { id: 's3_old_friend_left_good', text: { zh: '后来听说那人是个大忽悠，合伙人全被坑了，你躲过一劫。', en: 'Turns out the guy was a total fraud. All partners got scammed. You dodged a bullet.' }, effects: { safety: 20, finance: 15 }, weight: 30 },
        { id: 's3_old_friend_left_mid', text: { zh: '拒绝了之后生活照旧，偶尔好奇他们做得怎么样。', en: 'Life went on after declining. Occasionally wondered how they were doing.' }, effects: { safety: 10 }, weight: 40 },
        { id: 's3_old_friend_left_bad', text: { zh: '那人后来做成了独角兽，你肠子都悔青了。', en: 'That person built a unicorn company. You were green with regret.' }, effects: { safety: -15, finance: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '合作', en: 'Partner up' },
      effects: { network: 20, safety: -15 },
      outcomes: [
        { id: 's3_old_friend_right_good', text: { zh: '老同事确实靠谱，你们的 AI 创业公司拿到了天使轮融资！', en: 'Old colleague was legit. Your AI startup landed angel funding!' }, effects: { network: 25, finance: 20, skill: 15 }, weight: 30 },
        { id: 's3_old_friend_right_mid', text: { zh: '合伙创业比想象中琐碎，但至少方向对了。', en: 'Starting a business together was messier than expected, but at least the direction is right.' }, effects: { network: 20, safety: -15 }, weight: 40 },
        { id: 's3_old_friend_right_bad', text: { zh: '合伙没半年就因为股权分配吵翻了，友谊和钱都打了水漂。', en: 'Six months in, you fought over equity split. Lost both the friendship and the money.' }, effects: { network: -20, finance: -20, safety: -15 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_ai_universal_basic_income',
    character: 'ai',
    text: { zh: '"政府开始讨论 AI 时代全民基本收入。"', en: '"Government discussing universal basic income for AI era."' },
    leftChoice: {
      label: { zh: '等等看', en: 'Wait and see' },
      effects: { safety: -15 },
      outcomes: [
        { id: 's3_ubi_left_good', text: { zh: 'UBI 政策果然难产，但你趁这段时间考了几个热门证书，反而更抢手了。', en: 'UBI policy stalled as expected. But you used the time to get certifications and became more marketable.' }, effects: { safety: 15, skill: 15 }, weight: 30 },
        { id: 's3_ubi_left_mid', text: { zh: '政策还在讨论中，你继续观望，内心的不安越来越重。', en: 'Policy still under debate. You kept waiting. The anxiety kept growing.' }, effects: { safety: -15 }, weight: 40 },
        { id: 's3_ubi_left_bad', text: { zh: 'UBI 突然落地了但只覆盖低收入群体，你既没布局也没资格领取。', en: 'UBI launched suddenly but only covered low-income brackets. You neither planned ahead nor qualified.' }, effects: { safety: -20, finance: -20 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '提前布局', en: 'Plan ahead' },
      effects: { finance: 15, skill: 15, safety: -10 },
      outcomes: [
        { id: 's3_ubi_right_good', text: { zh: '你提前布局了 AI 时代的新技能和投资组合，UBI 来了你也不需要了。', en: "You positioned yourself with new AI-era skills and investments. When UBI arrived, you didn't even need it." }, effects: { finance: 25, skill: 20 }, weight: 35 },
        { id: 's3_ubi_right_mid', text: { zh: '布局方向大致对了，但花了不少钱和精力，成效还需要时间验证。', en: 'General direction was right but cost a lot of money and energy. Results yet to be proven.' }, effects: { finance: 15, skill: 15, safety: -10 }, weight: 40 },
        { id: 's3_ubi_right_bad', text: { zh: '你判断错了方向，投入的积蓄全打水漂，UBI 也迟迟没来。', en: 'You bet on the wrong direction. Savings wasted, and UBI never materialized.' }, effects: { finance: -25, skill: -15, safety: -15 }, weight: 25 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_hr_early_retirement',
    character: 'hr',
    text: { zh: '"公司提供提前退休方案，补偿丰厚。"', en: '"Company offers generous early retirement package."' },
    leftChoice: {
      label: { zh: '留下', en: 'Stay' },
      effects: { safety: -15, skill: 10 },
      outcomes: [
        { id: 's3_retirement_left_good', text: { zh: '留下的人太少，你反而成了稀缺资源，连升两级。', en: 'So few stayed that you became a scarce resource. Got promoted twice.' }, effects: { safety: 15, skill: 20, finance: 15 }, weight: 30 },
        { id: 's3_retirement_left_mid', text: { zh: '坚持留下了，工作量翻倍但至少还有收入和归属感。', en: 'Stuck it out. Workload doubled but at least you still have income and belonging.' }, effects: { safety: -15, skill: 10 }, weight: 40 },
        { id: 's3_retirement_left_bad', text: { zh: '三个月后公司还是倒了，这次连补偿方案都没有了。', en: 'Company folded three months later anyway. This time there was no severance package.' }, effects: { safety: -25, finance: -20 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '接受退休', en: 'Take retirement' },
      effects: { finance: 20, safety: -20, skill: -20 },
      outcomes: [
        { id: 's3_retirement_right_good', text: { zh: '拿到高额补偿金后去读了 AI 研究生，人生开启了第二春。', en: 'Got a generous severance. Used it to fund an AI graduate program. Second act began.' }, effects: { finance: 20, skill: 15 }, weight: 30 },
        { id: 's3_retirement_right_mid', text: { zh: '退休后在家闲了半年，既享受又焦虑，开始思考下一步。', en: 'Retired and spent six months at home. Equal parts relaxation and anxiety. Started thinking about next steps.' }, effects: { finance: 20, safety: -20, skill: -20 }, weight: 40 },
        { id: 's3_retirement_right_bad', text: { zh: '补偿金花完后发现根本找不到新工作，年龄和技能都成了障碍。', en: "Severance ran out and you couldn't find new work. Age and outdated skills became barriers." }, effects: { finance: -20, safety: -25, skill: -25 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_senior_life_meaning',
    character: 'senior',
    text: { zh: '"当 AI 什么都能做了，人的价值在哪？"', en: '"When AI can do everything, what\'s human value?"' },
    leftChoice: {
      label: { zh: '继续赚钱', en: 'Keep earning' },
      effects: { finance: 15, safety: -15 },
      outcomes: [
        { id: 's3_meaning_left_good', text: { zh: '赚钱赚到了财务自由，然后用钱做了一直想做的公益项目。', en: 'Made enough for financial freedom, then funded the charity project you always dreamed of.' }, effects: { finance: 25, network: 15 }, weight: 30 },
        { id: 's3_meaning_left_mid', text: { zh: '钱越赚越多，但内心的空虚感也越来越强。', en: 'Money kept growing, but so did the emptiness inside.' }, effects: { finance: 15, safety: -15 }, weight: 40 },
        { id: 's3_meaning_left_bad', text: { zh: '为了赚钱透支了身体，住院那天突然觉得这一切毫无意义。', en: 'Overworked yourself for money. The day you were hospitalized, it all felt meaningless.' }, effects: { finance: -15, safety: -25 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '寻找意义', en: 'Find meaning' },
      effects: { network: 15, skill: 15, finance: -15 },
      outcomes: [
        { id: 's3_meaning_right_good', text: { zh: '你创办了一个"人类价值"社区，聚集了一群志同道合的人，反而找到了新的事业方向。', en: 'You started a "Human Value" community. Found kindred spirits and a brand new career direction.' }, effects: { network: 25, skill: 20, finance: 15 }, weight: 30 },
        { id: 's3_meaning_right_mid', text: { zh: '意义这东西想了很久也没完全想通，但心态平和了不少。', en: "Still haven't fully figured out the meaning of life, but your mindset is much more at peace." }, effects: { network: 15, skill: 15, finance: -15 }, weight: 40 },
        { id: 's3_meaning_right_bad', text: { zh: '追寻意义的过程中耗尽了积蓄，家人也不理解你为什么放弃高薪工作。', en: "Burned through savings searching for meaning. Family couldn't understand why you gave up a high-paying job." }, effects: { finance: -25, network: -15, safety: -15 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_boss_train_ai_replacement',
    character: 'boss',
    text: { zh: '"你能帮忙训练AI来接替你的岗位吗？"', en: '"Can you help train the AI to replace your position?"' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Refuse' },
      effects: { safety: -20, network: -15 },
      outcomes: [
        { id: 's3_train_ai_left_good', text: { zh: '拒绝后意外引发了全公司关于 AI 伦理的讨论，你成了员工权益的代言人。', en: 'Your refusal sparked a company-wide AI ethics debate. You became the voice of employee rights.' }, effects: { safety: 15, network: 20 }, weight: 30 },
        { id: 's3_train_ai_left_mid', text: { zh: '老板不太高兴但暂时没动你，气氛有点尴尬。', en: "Boss wasn't happy but left you alone for now. Things are a bit awkward." }, effects: { safety: -20, network: -15 }, weight: 40 },
        { id: 's3_train_ai_left_bad', text: { zh: '拒绝后直接被边缘化，三个月后还是被裁了，连赔偿都压到最低。', en: 'Got sidelined immediately after refusing. Laid off three months later with minimal severance.' }, effects: { safety: -25, network: -20, finance: -20 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { finance: 20, safety: -15, skill: -15 },
      outcomes: [
        { id: 's3_train_ai_right_good', text: { zh: '训练 AI 的过程中你掌握了核心技术，转型成为 AI 训练师，收入反而更高了。', en: 'While training the AI, you mastered the core technology. Pivoted to AI trainer role with higher pay.' }, effects: { finance: 25, skill: 20 }, weight: 30 },
        { id: 's3_train_ai_right_mid', text: { zh: '完成了交接，拿了一笔补偿金，心里五味杂陈。', en: 'Finished the handover. Got a payout. Mixed feelings about the whole thing.' }, effects: { finance: 20, safety: -15, skill: -15 }, weight: 40 },
        { id: 's3_train_ai_right_bad', text: { zh: 'AI 上线后你当天就被裁了，承诺的补偿金也只给了一半。', en: 'The moment AI went live, you were let go. The promised severance was cut in half.' }, effects: { finance: -15, safety: -25, skill: -20 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_headhunter_consulting',
    character: 'headhunter',
    text: { zh: '"你的经验很值钱，做 AI 转型顾问怎样？"', en: '"Your experience is valuable. How about AI transformation consulting?"' },
    leftChoice: {
      label: { zh: '太累了', en: 'Too tired' },
      effects: { safety: 15, finance: -15 },
      outcomes: [
        { id: 's3_consulting_left_good', text: { zh: '休息了一段时间后精力恢复，反而被老东家高薪返聘回去做内部顾问。', en: 'After resting up, your old employer hired you back at premium rates as an internal advisor.' }, effects: { safety: 20, finance: 15 }, weight: 30 },
        { id: 's3_consulting_left_mid', text: { zh: '拒绝后生活确实轻松了，但看着账户余额不太乐观。', en: "Life got easier after declining, but watching your bank balance dwindle wasn't fun." }, effects: { safety: 15, finance: -15 }, weight: 40 },
        { id: 's3_consulting_left_bad', text: { zh: '拒绝太多机会后，猎头不再找你了，你在行业里逐渐被遗忘。', en: 'After turning down too many offers, headhunters stopped calling. You faded from the industry.' }, effects: { safety: -15, network: -20, finance: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '做顾问', en: 'Be a consultant' },
      effects: { finance: 20, network: 15, safety: -15 },
      outcomes: [
        { id: 's3_consulting_right_good', text: { zh: '你的转型咨询方法论被业界奉为标杆，出了本畅销书，财务自由了！', en: 'Your transformation methodology became an industry benchmark. Published a bestseller. Financial freedom achieved!' }, effects: { finance: 25, network: 25, skill: 15 }, weight: 30 },
        { id: 's3_consulting_right_mid', text: { zh: '顾问工作收入不错，但到处出差让你身心俱疲。', en: 'Consulting pays well, but constant travel is draining you physically and mentally.' }, effects: { finance: 20, network: 15, safety: -15 }, weight: 40 },
        { id: 's3_consulting_right_bad', text: { zh: '客户公司转型失败把锅甩给你，你的顾问声誉一落千丈。', en: "Client's transformation failed and they blamed you. Your consulting reputation tanked." }, effects: { finance: -15, network: -20, safety: -20 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_ai_robot_coworker',
    character: 'ai',
    text: { zh: '"你的新同事是一台 AI 机器人。"', en: '"Your new coworker is an AI robot."' },
    leftChoice: {
      label: { zh: '排斥', en: 'Resist' },
      effects: { safety: -20, network: -15 },
      outcomes: [
        { id: 's3_robot_left_good', text: { zh: '你的抗议引发了全公司讨论，最终人机协作方案更加人性化。', en: 'Your pushback sparked a company-wide discussion. The human-AI collaboration policy became much more humane.' }, effects: { safety: -15, network: 15 }, weight: 30 },
        { id: 's3_robot_left_mid', text: { zh: '团队气氛尴尬了一阵，但大家慢慢适应了。', en: 'Things were awkward for a while, but everyone gradually adapted.' }, effects: { safety: -20, network: -15 }, weight: 40 },
        { id: 's3_robot_left_bad', text: { zh: '你被贴上"抵制创新"的标签，晋升机会泡汤了。', en: 'You got labeled as "anti-innovation." Promotion opportunities evaporated.' }, effects: { safety: -25, network: -20, finance: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '合作', en: 'Cooperate' },
      effects: { skill: 15, safety: -10 },
      outcomes: [
        { id: 's3_robot_right_good', text: { zh: '你和AI搭档默契十足，效率翻倍，老板直接给你加薪！', en: 'You and the AI became an unstoppable duo. Productivity doubled and the boss gave you a raise!' }, effects: { skill: 20, finance: 20, safety: -10 }, weight: 30 },
        { id: 's3_robot_right_mid', text: { zh: '合作还算顺利，学到了一些AI协作技巧。', en: 'Cooperation went okay. Picked up some useful AI collaboration skills.' }, effects: { skill: 15, safety: -10 }, weight: 40 },
        { id: 's3_robot_right_bad', text: { zh: 'AI表现太好，老板开始觉得你多余了。', en: 'The AI performed so well that the boss started wondering if you were redundant.' }, effects: { skill: 15, safety: -25 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_colleague_last_chance',
    character: 'colleague',
    text: { zh: '"咱们这批人里，只有你还没被裁。"', en: '"Among our cohort, you\'re the only one not laid off."' },
    leftChoice: {
      label: { zh: '低调', en: 'Keep low' },
      effects: { safety: 15, network: -15 },
      outcomes: [
        { id: 's3_lastchance_left_good', text: { zh: '低调做事，领导注意到你的稳重，升你当了组长。', en: 'Kept your head down. Management noticed your composure and promoted you to team lead.' }, effects: { safety: 20, finance: 15 }, weight: 30 },
        { id: 's3_lastchance_left_mid', text: { zh: '日子照旧，但前同事们渐渐不再联系你了。', en: 'Life went on as usual, but former colleagues slowly stopped reaching out.' }, effects: { safety: 15, network: -15 }, weight: 40 },
        { id: 's3_lastchance_left_bad', text: { zh: '幸存者内疚让你夜不能寐，工作状态急剧下滑。', en: 'Survivor\'s guilt kept you up at night. Your work performance plummeted.' }, effects: { safety: -15, skill: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '帮助他们', en: 'Help them' },
      effects: { network: 20, safety: -15, finance: -15 },
      outcomes: [
        { id: 's3_lastchance_right_good', text: { zh: '帮同事们内推成功，大家组了个互助联盟，人脉爆棚！', en: 'Helped colleagues land new jobs through referrals. Built an incredible mutual-aid network!' }, effects: { network: 25, skill: 15, safety: -15 }, weight: 30 },
        { id: 's3_lastchance_right_mid', text: { zh: '尽力帮了一些人，自己的积蓄也花了不少。', en: 'Helped a few people out. Burned through a fair bit of savings doing it.' }, effects: { network: 20, safety: -15, finance: -15 }, weight: 40 },
        { id: 's3_lastchance_right_bad', text: { zh: '公司发现你在帮被裁员工，把你也列入了下一批名单。', en: 'Company found out you were helping laid-off workers. You ended up on the next layoff list.' }, effects: { network: 15, safety: -25, finance: -20 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_hr_retraining_fund',
    character: 'hr',
    text: { zh: '"公司出资让你去读 AI 研究生，要去吗？"', en: '"Company funds AI graduate degree. Take it?"' },
    leftChoice: {
      label: { zh: '太晚了', en: 'Too late' },
      effects: { safety: -10 },
      outcomes: [
        { id: 's3_retrain_left_good', text: { zh: '没去读书，但自学了一套实战技能，反而更抢手。', en: 'Skipped the degree but self-taught practical skills. Ended up even more in demand.' }, effects: { skill: 15, safety: -10 }, weight: 30 },
        { id: 's3_retrain_left_mid', text: { zh: '放弃了机会，一切照旧，心里有点遗憾。', en: 'Passed on the opportunity. Everything stayed the same. A little regret lingered.' }, effects: { safety: -10 }, weight: 40 },
        { id: 's3_retrain_left_bad', text: { zh: '新一波技术浪潮来了，你发现自己完全跟不上了。', en: 'A new tech wave hit and you realized you were completely left behind.' }, effects: { safety: -20, skill: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '去读书', en: 'Go study' },
      effects: { skill: 25, safety: -15, finance: -10 },
      outcomes: [
        { id: 's3_retrain_right_good', text: { zh: '研究生毕业后直接被AI实验室高薪录取，人生开挂！', en: 'Got recruited by an AI lab right after graduating. Career took off like a rocket!' }, effects: { skill: 25, finance: 20, network: 15 }, weight: 30 },
        { id: 's3_retrain_right_mid', text: { zh: '课程很有收获，回来后工作更得心应手了。', en: 'The coursework was rewarding. Came back sharper and more confident at work.' }, effects: { skill: 25, safety: -15, finance: -10 }, weight: 40 },
        { id: 's3_retrain_right_bad', text: { zh: '读书期间公司重组，回来发现岗位已经没了。', en: 'While you were studying, the company restructured. Your position was gone when you returned.' }, effects: { skill: 20, safety: -25, finance: -20 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_boss_last_project',
    character: 'boss',
    text: { zh: '"最后一个大项目，做完就功成身退。"', en: '"One last big project. Retire with glory after this."' },
    leftChoice: {
      label: { zh: '算了', en: 'Pass' },
      effects: { safety: 15 },
      outcomes: [
        { id: 's3_lastproj_left_good', text: { zh: '安稳退休，写了本回忆录意外畅销，赚了一笔版税。', en: 'Retired peacefully. Wrote a memoir that unexpectedly became a bestseller. Royalties rolled in.' }, effects: { safety: 20, finance: 15 }, weight: 30 },
        { id: 's3_lastproj_left_mid', text: { zh: '平静地度过了最后几个月，体面离场。', en: 'Spent your final months in peace. A graceful exit.' }, effects: { safety: 15 }, weight: 40 },
        { id: 's3_lastproj_left_bad', text: { zh: '退休后发现自己闲不下来，又没项目可做，很迷茫。', en: 'After retiring, you couldn\'t sit still but had nothing to work on. Lost and restless.' }, effects: { safety: 15, skill: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '最后一搏', en: 'One last shot' },
      effects: { skill: 20, finance: 15, safety: -25 },
      outcomes: [
        { id: 's3_lastproj_right_good', text: { zh: '项目大获成功！你的名字被刻在公司荣誉墙上，传奇谢幕。', en: 'The project was a massive success! Your name went on the company hall of fame. A legendary finale.' }, effects: { skill: 25, finance: 25, network: 20 }, weight: 30 },
        { id: 's3_lastproj_right_mid', text: { zh: '项目勉强交付，累得够呛，但至少没留遗憾。', en: 'Project barely shipped. Exhausting, but at least no regrets.' }, effects: { skill: 20, finance: 15, safety: -25 }, weight: 40 },
        { id: 's3_lastproj_right_bad', text: { zh: '项目烂尾了，最后一战成了职业生涯的污点。', en: 'The project fell apart. Your last stand became a career stain.' }, effects: { skill: -15, finance: -15, safety: -25, network: -15 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  {
    id: 's3_ai_sentient_debate',
    character: 'ai',
    text: { zh: '"AI 有没有意识？这场辩论改变了职场规则。"', en: '"Is AI sentient? This debate changed workplace rules."' },
    leftChoice: {
      label: { zh: '无所谓', en: 'Don\'t care' },
      effects: { safety: -15 },
      outcomes: [
        { id: 's3_sentient_left_good', text: { zh: '你的淡定反而让同事觉得你城府很深，对你更敬畏了。', en: 'Your nonchalance made colleagues think you were playing 4D chess. They respected you more.' }, effects: { safety: -15, network: 15 }, weight: 30 },
        { id: 's3_sentient_left_mid', text: { zh: '辩论热度过去了，生活如常，什么都没变。', en: 'The debate blew over. Life went on. Nothing changed.' }, effects: { safety: -15 }, weight: 40 },
        { id: 's3_sentient_left_bad', text: { zh: '新AI法规出台，你因为完全没准备被打了个措手不及。', en: 'New AI regulations dropped. You were completely unprepared and got blindsided.' }, effects: { safety: -25, skill: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '深入研究', en: 'Research it' },
      effects: { skill: 20, network: 10, safety: -10 },
      outcomes: [
        { id: 's3_sentient_right_good', text: { zh: '你的研究报告被权威期刊收录，成了AI伦理领域的新星！', en: 'Your research paper got published in a top journal. You became a rising star in AI ethics!' }, effects: { skill: 25, network: 20, finance: 15 }, weight: 30 },
        { id: 's3_sentient_right_mid', text: { zh: '研究过程中认识了很多志同道合的人，视野开阔了不少。', en: 'Met many like-minded people during your research. Your perspective broadened significantly.' }, effects: { skill: 20, network: 10, safety: -10 }, weight: 40 },
        { id: 's3_sentient_right_bad', text: { zh: '研究结论引发争议，你在网上被人疯狂攻击。', en: 'Your research conclusions sparked controversy. You got dogpiled online.' }, effects: { skill: 15, network: -15, safety: -20 }, weight: 30 },
      ],
    },
    stage: 3,
  },
  // Career-specific: programmer
  {
    id: 's3_ai_no_code_future',
    character: 'ai',
    text: { zh: '"零代码平台已经能构建 90% 的应用了。"', en: '"No-code platforms can now build 90% of applications."' },
    leftChoice: {
      label: { zh: '转行', en: 'Switch fields' },
      effects: { skill: -20, safety: -15, network: 15 },
      outcomes: [
        { id: 's3_no_code_left_good', text: { zh: '转型产品经理，反而更懂用户需求，大受欢迎！', en: 'Pivoted to product manager. Better user empathy — very popular!' }, effects: { network: 25, skill: 15 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_no_code_left_mid', text: { zh: '新领域还在摸索中，收入暂时下降了一些。', en: 'Still finding your way in the new field. Income dipped a bit.' }, effects: { skill: -15, safety: -10, network: 10 }, weight: 40 },
        { id: 's3_no_code_left_bad', text: { zh: '转行后发现毫无积累，从零开始太痛苦了。', en: 'Starting from scratch was brutal. No transferable skills.' }, effects: { skill: -25, safety: -20, network: -5 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '做底层', en: 'Go lower level' },
      effects: { skill: 25, safety: -10 },
      outcomes: [
        { id: 's3_no_code_right_good', text: { zh: '深耕底层架构，成为不可替代的基础设施专家！', en: 'Mastered low-level architecture. Became an irreplaceable infra expert!' }, effects: { skill: 25, safety: 15 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_no_code_right_mid', text: { zh: '底层开发确实更难被替代，但学习曲线很陡。', en: 'Harder to replace at the low level, but the learning curve is steep.' }, effects: { skill: 20, safety: -10 }, weight: 40 },
        { id: 's3_no_code_right_bad', text: { zh: '底层需求越来越少，技术栈太小众找不到工作。', en: 'Low-level demand shrunk. Niche stack, hard to find jobs.' }, effects: { skill: 15, safety: -20, finance: -15 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['programmer'],
  },
  {
    id: 's3_headhunter_cto',
    character: 'headhunter',
    text: { zh: '"有家上市公司找 CTO，年薪 200 万。"', en: '"Public company looking for CTO. 2M salary."' },
    leftChoice: {
      label: { zh: '不去', en: 'Decline' },
      effects: { safety: 15 },
      outcomes: [
        { id: 's3_cto_left_good', text: { zh: '留在舒适区继续深耕，反而等到了更好的机会。', en: 'Stayed in your comfort zone. An even better opportunity came along!' }, effects: { safety: 20, finance: 15 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_cto_left_mid', text: { zh: '安安稳稳过日子，没什么波澜。', en: 'Steady days. Nothing eventful.' }, effects: { safety: 15 }, weight: 40 },
        { id: 's3_cto_left_bad', text: { zh: '后来听说那家公司业绩翻倍了，有点后悔。', en: 'Heard the company doubled its revenue. Slight regret.' }, effects: { safety: 5, finance: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { finance: 25, network: 15, safety: -20 },
      outcomes: [
        { id: 's3_cto_right_good', text: { zh: '带领技术团队完成转型，成为行业标杆 CTO！', en: 'Led the tech team through transformation. Became a benchmark CTO!' }, effects: { finance: 25, network: 20, skill: 15 }, weight: 30, careerWeightModifiers: { programmer: 1.5 } },
        { id: 's3_cto_right_mid', text: { zh: '高管生活压力很大，但薪资确实不错。', en: 'Executive life is stressful, but the pay is solid.' }, effects: { finance: 20, safety: -15 }, weight: 40 },
        { id: 's3_cto_right_bad', text: { zh: '公司政治斗争激烈，被排挤出局，黯然离开。', en: 'Brutal corporate politics. Pushed out. Left in disgrace.' }, effects: { safety: -25, network: -15, finance: -20 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['programmer'],
  },
  // Career-specific: designer
  {
    id: 's3_ai_design_obsolete',
    character: 'ai',
    text: { zh: '"AI 设计师已经拿下了三个国际设计大奖。"', en: '"AI designer just won three international design awards."' },
    leftChoice: {
      label: { zh: '转型', en: 'Pivot' },
      effects: { skill: -15, network: 15 },
      outcomes: [
        { id: 's3_design_obsolete_left_good', text: { zh: '转型 AI 设计产品经理，成为人机协作设计的先驱！', en: 'Pivoted to AI design PM. Became a pioneer in human-AI design collaboration!' }, effects: { network: 25, skill: 15 }, weight: 30, careerWeightModifiers: { designer: 1.5 } },
        { id: 's3_design_obsolete_left_mid', text: { zh: '新方向还在摸索，但至少人脉拓宽了。', en: 'Still exploring the new direction, but your network expanded.' }, effects: { skill: -10, network: 15 }, weight: 40 },
        { id: 's3_design_obsolete_left_bad', text: { zh: '转型失败，设计功底荒废了，新领域也没站住脚。', en: 'Pivot failed. Lost design edge and couldn\'t establish in the new field.' }, effects: { skill: -25, safety: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '坚持创意', en: 'Stay creative' },
      effects: { skill: 20, safety: -20 },
      outcomes: [
        { id: 's3_design_obsolete_right_good', text: { zh: '坚持原创设计语言，反而成为稀缺人才，高薪邀约不断！', en: 'Your original design language became rare and coveted. Offers poured in!' }, effects: { skill: 25, finance: 20 }, weight: 30, careerWeightModifiers: { designer: 1.5 } },
        { id: 's3_design_obsolete_right_mid', text: { zh: '创意作品小众但有口碑，勉强维持生计。', en: 'Niche creative work with a good reputation. Barely getting by.' }, effects: { skill: 20, safety: -15 }, weight: 40 },
        { id: 's3_design_obsolete_right_bad', text: { zh: '市场已经不需要纯手工设计了，你被彻底淘汰。', en: 'The market no longer needs pure manual design. You\'re completely obsolete.' }, effects: { skill: -15, safety: -25, finance: -20 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['designer'],
  },
  {
    id: 's3_boss_design_department_close',
    character: 'boss',
    text: { zh: '"设计部要并入AI部门了，你愿意留下吗？"', en: '"Design department merging into AI division. Stay?"' },
    leftChoice: {
      label: { zh: '离开', en: 'Leave' },
      effects: { safety: -20, finance: -15 },
      outcomes: [
        { id: 's3_design_dept_left_good', text: { zh: '离开后自立门户，创办了独立设计工作室，接到大单！', en: 'Left and founded your own studio. Landed a huge contract!' }, effects: { finance: 20, network: 15 }, weight: 30, careerWeightModifiers: { designer: 1.5 } },
        { id: 's3_design_dept_left_mid', text: { zh: '自由职业收入不稳定，但至少自由了。', en: 'Freelancing income is unstable, but at least you\'re free.' }, effects: { safety: -15, finance: -10 }, weight: 40 },
        { id: 's3_design_dept_left_bad', text: { zh: '离开后才发现市场已经没有纯设计岗位了。', en: 'After leaving, realized there are no pure design roles left.' }, effects: { safety: -25, finance: -20, skill: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '留下', en: 'Stay' },
      effects: { skill: 15, safety: -15, network: -10 },
      outcomes: [
        { id: 's3_design_dept_right_good', text: { zh: '成功转型 AI 部门设计负责人，带领团队开创新方向！', en: 'Became AI division design lead. Pioneered a new creative direction!' }, effects: { skill: 25, network: 15 }, weight: 30, careerWeightModifiers: { designer: 1.5 } },
        { id: 's3_design_dept_right_mid', text: { zh: '虽然适应了新部门，但总觉得少了点什么。', en: 'Adapted to the new department, but something feels missing.' }, effects: { skill: 15, safety: -10 }, weight: 40 },
        { id: 's3_design_dept_right_bad', text: { zh: 'AI 部门根本不重视设计，你沦为配角。', en: 'AI division doesn\'t value design. You became a supporting role.' }, effects: { skill: -15, safety: -20, network: -15 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['designer'],
  },
  // Career-specific: teacher
  {
    id: 's3_ai_virtual_teacher',
    character: 'ai',
    text: { zh: '"虚拟AI教师满意度评分超过了真人教师。"', en: '"Virtual AI teacher satisfaction scores now exceed human teachers."' },
    leftChoice: {
      label: { zh: '不服', en: 'Disagree' },
      effects: { safety: -20 },
      outcomes: [
        { id: 's3_virtual_teacher_left_good', text: { zh: '公开发文反驳，引发社会大讨论，成了教育界意见领袖！', en: 'Published a rebuttal that went viral. Became an education thought leader!' }, effects: { network: 25, safety: 15 }, weight: 30, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's3_virtual_teacher_left_mid', text: { zh: '虽然心里不服但也没什么办法改变现状。', en: 'Disagreed in your heart but couldn\'t change things.' }, effects: { safety: -15 }, weight: 40 },
        { id: 's3_virtual_teacher_left_bad', text: { zh: '坚持对抗被视为守旧派，学校不再续约。', en: 'Seen as a traditionalist for resisting. School didn\'t renew your contract.' }, effects: { safety: -25, finance: -20 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '接受现实', en: 'Accept reality' },
      effects: { skill: 15, safety: -10, network: 10 },
      outcomes: [
        { id: 's3_virtual_teacher_right_good', text: { zh: '主动学习 AI 教学工具，成为人机协作教学专家！', en: 'Proactively learned AI teaching tools. Became a human-AI teaching expert!' }, effects: { skill: 25, network: 15 }, weight: 30, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's3_virtual_teacher_right_mid', text: { zh: '接受了现实，但心态上还是有些失落。', en: 'Accepted reality, but feeling a bit down.' }, effects: { skill: 15, safety: -10 }, weight: 40 },
        { id: 's3_virtual_teacher_right_bad', text: { zh: '全盘接受后失去了教学热情，变成了机械执行者。', en: 'Lost your teaching passion after full acceptance. Became a mechanical executor.' }, effects: { skill: -15, safety: -20 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['teacher'],
  },
  {
    id: 's3_hr_teacher_to_curator',
    character: 'hr',
    text: { zh: '"学校要你从教师转岗为学习体验设计师。"', en: '"School wants you to shift from teacher to learning experience designer."' },
    leftChoice: {
      label: { zh: '拒绝', en: 'Refuse' },
      effects: { safety: -20, skill: -15 },
      outcomes: [
        { id: 's3_curator_left_good', text: { zh: '拒绝后坚守教学岗位，学生联名请愿留住你！', en: 'Stayed in teaching. Students petitioned to keep you!' }, effects: { network: 20, safety: 15 }, weight: 30, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's3_curator_left_mid', text: { zh: '留在教学岗，但感觉越来越被边缘化。', en: 'Stayed in teaching, but felt increasingly marginalized.' }, effects: { safety: -15, skill: -10 }, weight: 40 },
        { id: 's3_curator_left_bad', text: { zh: '拒绝转岗后被视为不配合，直接被裁员了。', en: 'Seen as uncooperative for refusing. Got laid off.' }, effects: { safety: -25, finance: -20, skill: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { skill: 20, safety: -10 },
      outcomes: [
        { id: 's3_curator_right_good', text: { zh: '学习体验设计做得风生水起，成为全校最受欢迎的课程架构师！', en: 'Thrived as a learning experience designer. Most popular curriculum architect!' }, effects: { skill: 25, network: 15 }, weight: 30, careerWeightModifiers: { teacher: 1.5 } },
        { id: 's3_curator_right_mid', text: { zh: '新岗位还在适应中，学了很多但也挺累。', en: 'Adjusting to the new role. Learned a lot but it\'s exhausting.' }, effects: { skill: 20, safety: -10 }, weight: 40 },
        { id: 's3_curator_right_bad', text: { zh: '转岗后发现自己不适合设计工作，进退两难。', en: 'Realized you\'re not suited for design work. Stuck between roles.' }, effects: { skill: -15, safety: -20 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['teacher'],
  },
  // Career-specific: doctor
  {
    id: 's3_ai_surgery_robot',
    character: 'ai',
    text: { zh: '"手术机器人成功率已经超过人类医生。"', en: '"Surgical robots now have higher success rates than human doctors."' },
    leftChoice: {
      label: { zh: '不可能', en: 'Impossible' },
      effects: { safety: -15 },
      outcomes: [
        { id: 's3_surgery_left_good', text: { zh: '你的质疑引发了学术界深入研究，被授予医学伦理奖！', en: 'Your skepticism sparked deep academic research. Awarded a medical ethics prize!' }, effects: { network: 20, safety: 15 }, weight: 30, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's3_surgery_left_mid', text: { zh: '虽然不服气但也没什么证据反驳。', en: 'Unconvinced, but no evidence to counter the claim.' }, effects: { safety: -15 }, weight: 40 },
        { id: 's3_surgery_left_bad', text: { zh: '固执拒绝新技术，被医院视为阻碍进步。', en: 'Stubbornly rejected new tech. Hospital sees you as obstructing progress.' }, effects: { safety: -25, network: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '学习操控', en: 'Learn to operate' },
      effects: { skill: 25, safety: -10, finance: -10 },
      outcomes: [
        { id: 's3_surgery_right_good', text: { zh: '成为医院首位机器人手术认证专家，手术排期排到半年后！', en: 'Became the hospital\'s first certified robotic surgeon. Booked for 6 months!' }, effects: { skill: 25, finance: 20 }, weight: 30, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's3_surgery_right_mid', text: { zh: '学会了基本操控，但还需要大量实践。', en: 'Learned the basics, but need lots more practice.' }, effects: { skill: 20, safety: -10, finance: -10 }, weight: 40 },
        { id: 's3_surgery_right_bad', text: { zh: '学习期间出了操作失误，被暂停手术资格。', en: 'Made an error during training. Surgical privileges suspended.' }, effects: { safety: -25, skill: -15, finance: -15 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['doctor'],
  },
  {
    id: 's3_hr_hospital_restructure',
    character: 'hr',
    text: { zh: '"医院重组，你可以选择研究岗或临床岗。"', en: '"Hospital restructuring. Choose research or clinical?"' },
    leftChoice: {
      label: { zh: '临床', en: 'Clinical' },
      effects: { safety: 15, skill: -10 },
      outcomes: [
        { id: 's3_hospital_left_good', text: { zh: '选择临床后积累了大量病例经验，成为科室支柱！', en: 'Chose clinical. Accumulated vast case experience. Became a department pillar!' }, effects: { safety: 20, network: 15 }, weight: 30, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's3_hospital_left_mid', text: { zh: '临床工作稳定但缺乏突破，日复一日。', en: 'Clinical work is stable but monotonous. Day after day.' }, effects: { safety: 15, skill: -10 }, weight: 40 },
        { id: 's3_hospital_left_bad', text: { zh: '临床压力巨大，身心俱疲，开始后悔没选研究。', en: 'Clinical pressure was overwhelming. Exhausted. Regretted not choosing research.' }, effects: { safety: -15, skill: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '研究', en: 'Research' },
      effects: { skill: 20, finance: -15, safety: -10 },
      outcomes: [
        { id: 's3_hospital_right_good', text: { zh: '研究方向押对了，发了顶刊论文，获得大额科研经费！', en: 'Research bet paid off. Published in top journals. Got major funding!' }, effects: { skill: 25, finance: 20 }, weight: 30, careerWeightModifiers: { doctor: 1.5 } },
        { id: 's3_hospital_right_mid', text: { zh: '研究进展缓慢，但学到了不少前沿知识。', en: 'Research is slow, but learned cutting-edge knowledge.' }, effects: { skill: 20, finance: -15 }, weight: 40 },
        { id: 's3_hospital_right_bad', text: { zh: '研究方向被证伪，几年心血白费，经费也断了。', en: 'Research direction disproven. Years of work wasted. Funding cut.' }, effects: { skill: -15, finance: -25, safety: -15 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['doctor'],
  },
  // Career-specific: content_creator
  {
    id: 's3_ai_virtual_influencer',
    character: 'ai',
    text: { zh: '"虚拟网红的粉丝数已经超过了真人博主。"', en: '"Virtual influencers now have more followers than real ones."' },
    leftChoice: {
      label: { zh: '退出', en: 'Quit' },
      effects: { safety: -20, skill: -15 },
      outcomes: [
        { id: 's3_influencer_left_good', text: { zh: '退出后转行幕后制作，反而发现了新天地！', en: 'Quit and pivoted to behind-the-scenes production. Found a new calling!' }, effects: { skill: 20, network: 15 }, weight: 30, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's3_influencer_left_mid', text: { zh: '退出后休息了一段时间，想想接下来做什么。', en: 'Took a break after quitting. Figuring out what\'s next.' }, effects: { safety: -15, skill: -10 }, weight: 40 },
        { id: 's3_influencer_left_bad', text: { zh: '退出后再也找不到合适的工作，积蓄快花光了。', en: 'Couldn\'t find a suitable job after quitting. Savings running out.' }, effects: { safety: -25, finance: -20, skill: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '打造IP', en: 'Build personal IP' },
      effects: { network: 20, skill: 15, finance: -15 },
      outcomes: [
        { id: 's3_influencer_right_good', text: { zh: '打造了独特的真人 IP，反而因为"真实感"逆势翻红！', en: 'Built a unique real-person IP. Went viral for "authenticity"!' }, effects: { network: 25, finance: 20 }, weight: 30, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's3_influencer_right_mid', text: { zh: '个人 IP 慢慢有了一些粉丝，但增长缓慢。', en: 'Personal IP gained some followers, but growth is slow.' }, effects: { network: 15, skill: 15, finance: -15 }, weight: 40 },
        { id: 's3_influencer_right_bad', text: { zh: '投了大量资金打造 IP，但市场已经不关注真人了。', en: 'Invested heavily in IP building, but the market moved on from real people.' }, effects: { finance: -25, safety: -20 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['content_creator'],
  },
  {
    id: 's3_headhunter_media_exec',
    character: 'headhunter',
    text: { zh: '"有个媒体集团找内容总监，你经验够了。"', en: '"Media group seeking content director. You\'re qualified."' },
    leftChoice: {
      label: { zh: '自由更好', en: 'Prefer freedom' },
      effects: { network: -10, safety: 10 },
      outcomes: [
        { id: 's3_media_exec_left_good', text: { zh: '坚持自由创作，作品被国际平台买断版权，名利双收！', en: 'Stayed independent. Your work got licensed by an international platform. Fame and fortune!' }, effects: { finance: 20, network: 15 }, weight: 30, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's3_media_exec_left_mid', text: { zh: '自由虽好，收入不太稳定，但还过得去。', en: 'Freedom is nice, income unstable, but manageable.' }, effects: { safety: 10, finance: -10 }, weight: 40 },
        { id: 's3_media_exec_left_bad', text: { zh: '自由职业竞争激烈，接不到活，生活质量下降。', en: 'Freelance competition was fierce. No gigs. Quality of life dropped.' }, effects: { finance: -20, safety: -15 }, weight: 30 },
      ],
    },
    rightChoice: {
      label: { zh: '接受', en: 'Accept' },
      effects: { finance: 25, network: 15, safety: -15 },
      outcomes: [
        { id: 's3_media_exec_right_good', text: { zh: '带领团队打造了现象级内容矩阵，成为行业风云人物！', en: 'Led the team to build a blockbuster content empire. Became an industry titan!' }, effects: { finance: 25, network: 25 }, weight: 30, careerWeightModifiers: { content_creator: 1.5 } },
        { id: 's3_media_exec_right_mid', text: { zh: '总监职位薪资丰厚，但创作自由大幅减少。', en: 'Director role pays well, but creative freedom took a huge hit.' }, effects: { finance: 20, safety: -15 }, weight: 40 },
        { id: 's3_media_exec_right_bad', text: { zh: '集团内部派系斗争，你被当作替罪羊，黯然离职。', en: 'Internal faction wars. You became the scapegoat. Resigned in disgrace.' }, effects: { safety: -25, network: -20, finance: -15 }, weight: 30 },
      ],
    },
    stage: 3,
    careerIds: ['content_creator'],
  },
];

export const allCards: SwipeCard[] = [
  ...stage1Generic,
  ...stage2Generic,
  ...stage3Generic,
];
