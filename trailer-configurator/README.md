# TrailerConfig Pro - Floor Plan Configurator

A modern, production-ready trailer floor plan configurator built with scalability and future SolidWorks integration in mind.

## 🚀 Quick Start (MVP - Standalone)

The standalone MVP is ready to use immediately:

```bash
# Open in browser
open trailer-configurator/index.html
```

No build required - works directly in any modern browser.

## 🛠️ Full Next.js Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd trailer-configurator

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
trailer-configurator/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   └── layouts/   # Layout save/load endpoints
│   │   ├── page.tsx       # Main editor page
│   │   └── layout.tsx     # Root layout
│   ├── components/
│   │   ├── canvas/        # Konva canvas components
│   │   ├── sidebar/        # Sidebar components
│   │   └── inspector/      # Property inspector
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   ├── store/             # Zustand state management
│   └── types/             # TypeScript interfaces
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 MVP Features

### Canvas / Workspace
- [x] Infinite scrollable canvas with grid
- [x] Zoom in/out controls
- [x] Pan navigation
- [x] Snap-to-grid support
- [x] Responsive layout

### Drag-and-Drop Builder
- [x] Walls, doors, windows
- [x] Cabinets and furniture
- [x] Equipment blocks
- [x] Electrical items
- [x] Plumbing items
- [x] Drag, resize, rotate
- [x] Duplicate and delete
- [x] Layer ordering

### Inspector Panel
- [x] Edit dimensions
- [x] Position values
- [x] Rotation
- [x] Labels/names
- [x] Material metadata

### JSON Configuration
- [x] Full floor plan serialization
- [x] Export to JSON file
- [x] Component structured data

## 🔧 Architecture

### Technology Stack

| Layer | Technology |
|-------|------------|
| UI Framework | Next.js 14 (App Router) |
| Canvas | Konva.js / react-konva |
| State | Zustand |
| API | React Query + Next.js API Routes |
| Styling | Tailwind CSS |
| Language | TypeScript |

### Future Integration Points

The architecture is designed for easy integration:

1. **SolidWorks Automation**
   - JSON schema maps to CAD parameters
   - Export pipeline ready
   - BOM generation endpoint

2. **3D Visualization**
   - Canvas data structure supports 3D mapping
   - Separate Three.js renderer can consume same state

3. **Real-time Collaboration**
   - Zustand store can sync via WebSocket
   - Component state is serializable

4. **Pricing Engine**
   - Component metadata includes material costs
   - Ready for dynamic pricing calculation

## 📋 JSON Schema

```json
{
  "trailer": {
    "length": 16000,
    "width": 2400
  },
  "components": [
    {
      "id": "cabinet-1",
      "type": "cabinet",
      "name": "Upper Cabinet",
      "category": "cabinets",
      "x": 1200,
      "y": 300,
      "width": 600,
      "height": 400,
      "rotation": 0,
      "material": null,
      "manufacturingData": null
    }
  ]
}
```

## 🎨 Component Library

### Categories

- **Walls**: Solid, Panel, Divider
- **Doors**: Single, Double, Sliding, Roll Up
- **Windows**: Fixed, Operable, Escape
- **Cabinets**: Upper, Lower, Tall, Mobile
- **Equipment**: Refrigerator, Stove, Sink, AC, Generator
- **Electrical**: Outlet, Switch, Main Panel, LED Light
- **Plumbing**: Fresh Tank, Waste Tank, Pump, Shower
- **Furniture**: Sofa, Dinette, Bed, Desk

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| V | Select tool |
| H | Pan tool |
| A | Add tool |
| Delete | Delete selected |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |
| Ctrl+D | Duplicate |

## 🔜 Future Phases

- [ ] Three.js 3D visualization
- [ ] Real-time collaboration
- [ ] Pricing engine integration
- [ ] Manufacturing rules engine
- [ ] SolidWorks automation sync
- [ ] BOM generation
- [ ] Cut list export
- [ ] Fabrication drawings

## 📄 License

MIT
