# 虚拟助手FAQ系统 / Virtual Avatar FAQ System

这是一个基于React的虚拟助手FAQ系统，专为呼吸科住培生教育设计。该项目集成了MuseTalk实时唇形同步技术，为医学住培生提供交互式学习体验。

This is a React-based Virtual Avatar FAQ system for respiratory medicine resident education. The project integrates MuseTalk real-time lip-sync technology, providing an interactive learning experience for medical residents.

## 🚀 主要特性 / Key Features

- **交互式FAQ界面** / Interactive FAQ Interface: 双栏布局，问题列表与视频播放器 / Two-column layout with question list and video player
- **虚拟形象生成** / Virtual Avatar Generation: 基于MuseTalk技术的实时唇形同步 / Real-time lip-sync based on MuseTalk technology  
- **医学教育内容** / Medical Education Content: 专门为呼吸科住培生设计 / Specifically designed for respiratory medicine residents
- **多媒体支持** / Multimedia Support: 集成视频播放和音频处理 / Integrated video playback and audio processing
- **响应式设计** / Responsive Design: 基于Material-UI的现代化界面 / Modern UI based on Material-UI

## 🛠 技术栈 / Tech Stack

### 前端 / Frontend
- **React 18** with TypeScript
- **Material-UI (MUI) v5** with Emotion styling
- **Tailwind CSS** (配置中 / In configuration)
- **Create React App** build tool

### 虚拟形象生成 / Virtual Avatar Generation  
- **MuseTalk** (Tencent Music Entertainment Lyra Lab)
- **Python 3.10+** with CUDA 11.7
- **实时推理** / Real-time inference (30fps+)
- **多语言支持** / Multi-language support (中文、英文、日文 / Chinese, English, Japanese)

## 📦 快速开始 / Quick Start

### 安装依赖 / Install Dependencies
```bash
npm install
```

### 启动开发服务器 / Start Development Server
```bash
npm start
```
访问 http://localhost:3050 查看应用 / Visit http://localhost:3050 to view the app

### 生产构建 / Production Build
```bash
npm run build
```

## 🎥 MuseTalk虚拟形象生成 / MuseTalk Virtual Avatar Generation

### 环境准备 / Environment Setup
```bash
cd vendors/MuseTalk
pip install -r requirements.txt

# 安装mmlab包 / Install mmlab packages
pip install --no-cache-dir -U openmim 
mim install mmengine 
mim install "mmcv>=2.0.1" 
mim install "mmdet>=3.1.0" 
mim install "mmpose>=1.1.0"
```

### 生成虚拟形象视频 / Generate Virtual Avatar Videos
```bash
# 基础推理 / Basic inference
python -m scripts.inference --inference_config configs/inference/test.yaml

# 实时推理 / Real-time inference  
python -m scripts.realtime_inference --inference_config configs/inference/realtime.yaml --batch_size 4

# 护士形象生成 / Nurse avatar generation
python -m scripts.inference --inference_config configs/inference/nurse_full.yaml
```

## 📁 项目结构 / Project Structure

```
├── src/                        # React源码 / React source code
│   ├── components/FAQPage.tsx  # 主要FAQ组件 / Main FAQ component
│   ├── data/                   # JSON数据文件 / JSON data files
│   │   ├── zpq.json           # 住培生数据(当前使用) / Resident data (current)
│   │   └── faq.json           # 患者FAQ数据 / Patient FAQ data
│   └── types/                  # TypeScript类型 / TypeScript types
├── public/assets/video/        # 视频资源 / Video assets
│   ├── zp/                    # 住培生视频 / Resident videos
│   └── faq/                   # 患者FAQ视频 / Patient FAQ videos  
└── vendors/MuseTalk/           # 虚拟形象生成工具 / Virtual avatar tool
    ├── models/                # AI模型权重 / AI model weights
    ├── data/                  # 训练数据 / Training data
    ├── configs/               # 配置文件 / Configuration files
    └── results/               # 生成结果 / Generated results
```

## 📋 可用脚本 / Available Scripts

### React应用 / React App

#### `npm start`
在开发模式下运行应用，访问 http://localhost:3050 查看。页面会在代码修改后自动刷新，控制台会显示lint错误。

Runs the app in development mode. Open http://localhost:3050 to view it in the browser. The page will reload if you make edits and you will see any lint errors in the console.

#### `npm test`
启动测试运行器的交互监视模式。更多信息请参考 [运行测试文档](https://facebook.github.io/create-react-app/docs/running-tests)。

Launches the test runner in interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
将应用打包到 `build` 文件夹用于生产部署。正确打包React并优化构建以获得最佳性能。构建后的文件被压缩，文件名包含哈希值，应用就可以部署了！

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for best performance. The build is minified and the filenames include hashes. Your app is ready to be deployed!

更多部署信息请参考 [部署文档](https://facebook.github.io/create-react-app/docs/deployment)。

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**注意：这是一个单向操作。一旦 `eject`，就无法回退！**

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

如果您对构建工具和配置选择不满意，可以随时 `eject`。此命令将从项目中删除单一的构建依赖项，并将所有配置文件和传递依赖项（webpack、Babel、ESLint等）复制到项目中，以便您完全控制它们。除了 `eject` 之外的所有命令仍然可以工作，但它们将指向复制的脚本，因此您可以调整它们。这时您就要自己负责了。

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project and copy all configuration files and transitive dependencies right into your project so you have full control over them. All commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

您不必使用 `eject`。精选的功能集适合中小型部署，您不应该感到有义务使用此功能。但是我们理解，如果您无法在准备好时自定义它，这个工具就没有用处了。

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 📚 数据说明 / Data Description

### 住培生数据 (zpq.json) / Resident Data
包含3个呼吸科住培生入科教育问题：
- 每日要求 / Daily requirements
- 值班要求 / Duty requirements  
- 收治病人常见问题 / Common patient admission issues

Contains 3 respiratory medicine resident orientation questions covering daily requirements, duty requirements, and common patient admission issues.

### 患者FAQ数据 (faq.json) / Patient FAQ Data  
包含17个患者常见问题，涵盖：
- 抽血检查 / Blood tests
- 用药说明 / Medication instructions
- 检查流程 / Examination procedures
- 住院须知 / Hospitalization guidelines

Contains 17 common patient questions covering blood tests, medication, examinations, and hospitalization procedures.

## 🔧 开发说明 / Development Notes

- 端口配置：开发服务器运行在 **3050** 端口 / Port: Development server runs on port **3050**
- 当前使用住培生数据集，可在 `FAQPage.tsx` 中切换数据源 / Currently uses resident dataset, data source can be switched in `FAQPage.tsx`
- 页面标题可考虑更新为"虚拟助手FAQ系统" / Page title could be updated to "Virtual Assistant FAQ System"
- MuseTalk生成的视频可放置在 `public/assets/video/` 供React应用使用 / MuseTalk-generated videos can be placed in `public/assets/video/` for React app usage

## 📖 了解更多 / Learn More

- [Create React App 文档](https://facebook.github.io/create-react-app/docs/getting-started) / [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React 文档](https://reactjs.org/) / [React Documentation](https://reactjs.org/)
- [MuseTalk GitHub](https://github.com/TMElyralab/MuseTalk)
- [MuseTalk 论文](https://arxiv.org/abs/2410.10122) / [MuseTalk Technical Report](https://arxiv.org/abs/2410.10122)

## 📄 许可证 / License

- React应用代码：MIT许可证 / React app code: MIT License
- MuseTalk：MIT许可证（学术和商业用途） / MuseTalk: MIT License (academic and commercial use)
- 训练数据：仅供非商业研究使用 / Training data: Non-commercial research purposes only

---

*Generated with [Claude Code](https://claude.ai/code)*
