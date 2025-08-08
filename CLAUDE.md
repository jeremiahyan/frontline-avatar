# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

在处理此项目时，请使用中英双语进行所有交流和回答。 / When working on this project, please use bilingual format (Chinese and English) for all communication and responses.

## Project Overview / 项目概述

这是一个基于React的虚拟助手FAQ系统，专为呼吸科住培生教育设计。应用展示医学教育问题及对应的视频内容，为医学住培生提供交互式学习体验。该项目集成了MuseTalk实时唇形同步技术，用于生成虚拟形象视频。 / This is a React-based Virtual Avatar FAQ system for respiratory medicine resident education. The application displays medical education questions with corresponding video content, providing an interactive learning experience for medical residents. The project integrates MuseTalk real-time lip-sync technology for virtual avatar video generation.

该项目包含两套FAQ数据：住培生专用内容(zpq.json)和患者常见问题(faq.json)，目前主要使用住培生内容。项目还包含了MuseTalk虚拟形象生成工具，可以基于静态图像和音频生成同步口型的视频内容。 / The project contains two sets of FAQ data: resident-specific content (zpq.json) and patient FAQ content (faq.json), currently primarily using the resident content. It also includes MuseTalk virtual avatar generation tools that can create lip-synced videos from static images and audio.

## Development Commands / 开发命令

```bash
# 安装依赖 / Install dependencies
npm install

# 开发服务器 (端口3050) / Development server (runs on port 3050)
npm start

# 生产构建 / Build for production
npm run build

# 运行测试 / Run tests
npm test

# 从Create React App弹出 (单向操作) / Eject from Create React App (one-way operation)
npm run eject
```

### MuseTalk虚拟形象生成命令 / MuseTalk Virtual Avatar Generation Commands

```bash
# 进入MuseTalk目录 / Navigate to MuseTalk directory
cd vendors/MuseTalk

# 安装Python依赖 / Install Python dependencies
pip install -r requirements.txt

# 安装mmlab相关包 / Install mmlab packages
pip install --no-cache-dir -U openmim 
mim install mmengine 
mim install "mmcv>=2.0.1" 
mim install "mmdet>=3.1.0" 
mim install "mmpose>=1.1.0"

# 基础推理生成 / Basic inference generation
python -m scripts.inference --inference_config configs/inference/test.yaml

# 实时推理生成 / Real-time inference generation
python -m scripts.realtime_inference --inference_config configs/inference/realtime.yaml --batch_size 4

# 护士形象配置推理 / Nurse avatar configuration inference  
python -m scripts.inference --inference_config configs/inference/nurse_full.yaml

# 护士半身形象推理 / Nurse half-body avatar inference
python -m scripts.inference --inference_config configs/inference/nurse_half.yaml
```

## Architecture / 架构

### Tech Stack / 技术栈
- **前端框架 / Frontend**: React 18 with TypeScript
- **UI框架 / UI Framework**: Material-UI (MUI) v5 with Emotion styling
- **样式工具 / Styling**: Tailwind CSS (已安装但未配置content路径 / installed but content array empty)
- **构建工具 / Build Tool**: Create React App with react-scripts
- **数据存储 / Data**: Static JSON files for FAQ content
- **测试框架 / Testing**: Jest with Testing Library
- **虚拟形象生成 / Virtual Avatar**: MuseTalk (Tencent) - 实时高质量唇形同步 / Real-time high-quality lip synchronization

### Project Structure / 项目结构
```
src/
├── components/
│   └── FAQPage.tsx          # 主FAQ组件，包含问题列表和视频播放器 / Main FAQ component with question list and video player
├── data/
│   ├── faq.json            # 患者常见问题数据(17个问题) / Patient FAQ data (17 questions)
│   └── zpq.json            # 住培生教育数据(3个问题，当前使用) / Resident education data (3 questions, currently active)
├── types/
│   ├── json.d.ts           # JSON模块声明 / JSON module declarations
│   └── types.ts            # TypeScript类型定义 / TypeScript type definitions
├── App.tsx                 # 应用入口，包含MUI主题配置 / App entry with MUI theme setup
└── index.tsx               # React入口点 / React entry point
public/
├── assets/
│   └── video/
│       ├── faq/            # 患者FAQ视频文件 / Patient FAQ video files
│       └── zp/             # 住培生培训视频文件 / Resident training video files
└── index.html              # 页面标题为默认"React App" / Page title is default "React App"
vendors/
└── MuseTalk/               # 虚拟形象生成工具 / Virtual avatar generation tool
    ├── models/             # AI模型权重文件 / AI model weights
    ├── data/               # 训练数据和参考图片 / Training data and reference images
    │   ├── nurse_full/     # 护士全身照片 / Nurse full body photos
    │   ├── nurse_half/     # 护士半身照片 / Nurse half body photos
    │   ├── doctor_*/       # 医生照片 / Doctor photos
    │   ├── voice/          # 语音文件 / Voice files
    │   └── audio/          # 音频文件 / Audio files
    ├── results/            # 生成的视频结果 / Generated video results
    └── configs/            # 推理配置文件 / Inference configuration files
```

### Key Components / 核心组件

**FAQPage.tsx** 主要功能 / Main functionality:
- 渲染双栏布局（问题列表 + 视频播放器） / Renders two-column layout (question list + video player)
- 使用MUI组件：List、Collapse、Paper、Typography / Uses MUI components: List, Collapse, Paper, Typography
- 管理选中问题的状态 / Manages selected question state
- 支持问题展开/收起功能 / Supports question expand/collapse functionality
- 自动播放对应视频 / Auto-plays corresponding videos

**MuseTalk虚拟形象生成 / MuseTalk Virtual Avatar Generation**:
- 基于腾讯音乐实验室开发的实时唇形同步技术 / Based on Tencent Music Entertainment Lyra Lab's real-time lip-sync technology
- 支持30fps+高质量视频生成 / Supports 30fps+ high-quality video generation
- 包含医生和护士形象的训练数据 / Includes training data for doctor and nurse avatars
- 支持中文、英文、日文等多语言音频处理 / Supports multilingual audio processing (Chinese, English, Japanese)
- 可生成256x256分辨率的面部区域视频 / Generates 256x256 resolution facial region videos

### Data Structure / 数据结构

**当前使用zpq.json / Currently using zpq.json**:
- 3个住培生入科教育问题 / 3 resident orientation education questions
- 内容：每日要求、值班要求、收治病人常见问题 / Content: Daily requirements, duty requirements, common patient admission issues
- 视频路径：`/assets/video/zp/zpq*.mp4` / Video paths: `/assets/video/zp/zpq*.mp4`

**备用faq.json / Alternative faq.json**:
- 17个患者常见问题 / 17 common patient questions  
- 涵盖：抽血、用药、检查、住院等医疗话题 / Covers: Blood tests, medication, examinations, hospitalization topics
- 视频路径：`/assets/video/faq/q*.nurse.mp4` / Video paths: `/assets/video/faq/q*.nurse.mp4`

### TypeScript Configuration / TypeScript配置

- 基准路径设置为 `src/` 用于绝对导入 / Base URL set to `src/` for absolute imports
- 启用严格模式 / Strict mode enabled
- 启用JSON模块解析 / JSON module resolution enabled
- 使用React JSX转换 / React JSX transform configured
- 包含完整的Question接口定义 / Includes complete Question interface definition

### Content Management / 内容管理

**视频组织结构 / Video organization**:
- `/assets/video/zp/` - 住培生培训视频（当前激活） / Resident training videos (currently active)  
- `/assets/video/faq/` - 患者FAQ视频，按医护人员分类 / Patient FAQ videos, categorized by healthcare staff

**数据切换 / Data switching**:
- 在FAQPage.tsx中切换导入的数据源 / Switch imported data source in FAQPage.tsx
- 注释/取消注释对应的import语句 / Comment/uncomment corresponding import statements

### Port Configuration / 端口配置

开发服务器运行在端口3050（package.json中配置）/ Development server runs on port 3050 (configured in package.json start script).

## Development Notes / 开发注意事项

### React应用相关 / React Application Related
- 应用当前使用 `zpqData` 而非 `faqData` / Application currently uses `zpqData` instead of `faqData`
- Tailwind CSS已安装但未激活使用（content数组为空）/ Tailwind CSS installed but not actively used (empty content array)
- MUI主题使用系统字体，回退到标准Web字体 / MUI theming uses system fonts with fallback to standard web fonts
- 选择问题时视频自动播放 / Videos autoplay when a question is selected
- 界面完全中文化，专为中国医学教育设计 / Interface is fully in Chinese, designed for Chinese medical education
- 页面标题仍为默认"React App"，可考虑更新为"虚拟助手FAQ系统" / Page title remains default "React App", consider updating to "Virtual Assistant FAQ System"

### MuseTalk虚拟形象生成相关 / MuseTalk Virtual Avatar Generation Related
- 需要Python 3.10+和CUDA 11.7环境 / Requires Python 3.10+ and CUDA 11.7 environment
- 模型权重文件已下载并组织在 `vendors/MuseTalk/models/` 目录 / Model weights are downloaded and organized in `vendors/MuseTalk/models/` directory
- 包含护士和医生的训练图片数据 / Contains training image data for nurses and doctors
- 生成的视频结果保存在 `vendors/MuseTalk/results/` 目录 / Generated video results are saved in `vendors/MuseTalk/results/` directory
- 可使用 `bbox_shift` 参数调整嘴部开合程度 / Can use `bbox_shift` parameter to adjust mouth openness
- 支持实时推理，可达到30fps+性能 / Supports real-time inference with 30fps+ performance

### 数据和视频管理 / Data and Video Management
- 当前FAQ视频存储在 `public/assets/video/` 目录 / Current FAQ videos are stored in `public/assets/video/` directory
- MuseTalk生成的新视频可复制到上述目录供React应用使用 / MuseTalk-generated videos can be copied to the above directory for React app usage
- 音频文件存储在 `vendors/MuseTalk/data/voice/` 和 `data/audio/` / Audio files stored in `vendors/MuseTalk/data/voice/` and `data/audio/`

## Task Management Workflow / 任务管理流程

**MANDATORY 5-STEP WORKFLOW / 强制性5步工作流程**

When completing any significant task or milestone in frontline-avatar, **MUST** follow:

**Step 1: Update task status / 第1步：更新任务状态**
- Use TodoWrite tool to mark task as "completed"

**Step 2: Update tasks.md / 第2步：更新tasks.md**
- Edit `.kiro/specs/frontline-avatar/*/tasks.md` if exists
- Change `- [ ]` to `- [x]` for completed items

**Step 3: Call docs-engineer agent / 第3步：调用文档工程师**
- Update `frontline-avatar/CHANGELOG.md` and `frontline-avatar/README.md`
- Document virtual avatar improvements and React component changes
- Record MuseTalk integration updates

**Step 4: Call tech-doc-secretary agent (if applicable) / 第4步：调用技术书记员**
- Document technical decisions in `frontline-avatar/docs/technical-decisions/`
- Record virtual avatar generation strategies, React architecture choices, etc.

**Step 5: 双层Git提交 / 第5步：Dual-Layer Git Commit**

**⚠️ CRITICAL: 作为主项目的子项目，需要双层提交流程**

- **5.1 frontline-avatar子项目提交 / Subproject Commit FIRST**:
  ```bash
  # 在 frontline-avatar 目录中提交
  git add .
  git commit -m "feat: Complete [specific virtual avatar feature]
  
  [详细描述实现的虚拟助手功能、React组件改进、MuseTalk集成等]
  - React FAQ组件开发和用户界面优化
  - MuseTalk虚拟形象生成和唇形同步改进
  - 医学FAQ数据和视频内容更新
  - 虚拟助手交互逻辑和用户体验提升
  - TypeScript类型定义和组件架构优化
  
  🤖 Generated with [Claude Code](https://claude.ai/code)
  Co-Authored-By: Claude <noreply@anthropic.com>"
  ```

- **5.2 返回主项目更新子模块 / Return to Main Project SECOND**:
  ```bash
  # 返回主项目根目录
  cd ..
  git add frontline-avatar  # 暂存子项目更新
  git commit -m "chore: Update frontline-avatar submodule with [virtual avatar milestone]
  
  更新frontline-avatar子模块，包含[具体虚拟助手功能]的完整实现
  虚拟助手更新内容包括界面优化、MuseTalk集成、FAQ内容等
  
  🤖 Generated with [Claude Code](https://claude.ai/code)
  Co-Authored-By: Claude <noreply@anthropic.com>"
  ```

**提交顺序要求**:
1. 必须先在frontline-avatar中提交虚拟助手代码更改
2. 然后回到主项目提交子模块更新
3. 确保主项目能正确跟踪frontline-avatar的版本
4. 特别注意vendors/MuseTalk目录的更新

**🚨 This 5-step workflow is MANDATORY and ensures virtual avatar changes are properly documented.**

## Important Notes / 重要注意事项

1. **Node版本**: 需要 Node.js >= 16.0.0 / Requires Node.js >= 16.0.0
2. **Python环境**: MuseTalk需要 Python 3.10+ 和 CUDA 11.7 / MuseTalk requires Python 3.10+ and CUDA 11.7
3. **端口配置**: 开发服务器运行在端口3050 / Development server runs on port 3050
4. **数据切换**: 可在FAQPage.tsx中切换FAQ数据源 / Can switch FAQ data sources in FAQPage.tsx
5. **虚拟形象生成**: 需要下载完整的MuseTalk模型权重 / Requires complete MuseTalk model weights download
6. **视频存储**: 生成的视频需要手动复制到public目录 / Generated videos need manual copy to public directory
7. **多语言支持**: MuseTalk支持中英日等多语言音频 / MuseTalk supports multilingual audio (Chinese, English, Japanese)