# Conservation Management Platform (CMP)
## MVP Proposal

---

## Executive Summary

The **Conservation Management Platform (CMP)** is an MVP demonstration of a personal knowledge graph system designed to preserve and organize life's memories — photos, journals, documents, emails, calendar events, and more — into a connected, searchable archive.

This MVP showcases five core interface tabs that will form the foundation of the full platform, demonstrating the UI/UX vision and core functionality.

---

## MVP Features Overview

| Feature Tab | Status | Description |
|------------|--------|-------------|
| **Builder** | ✅ Implemented | Pipeline management for text, images, and API ingestion |
| **Editor** | ✅ Implemented | Knowledge graph node search, edit, and linking |
| **Query** | ✅ Implemented | Natural language query interface |
| **Visualization** | ✅ Implemented | Timeline, stats, and filter-based views |
| **Multimedia** | ✅ Implemented | Photo gallery with filtering by person/place/date |

---

## Screenshots & Descriptions

### 1. Builder Tab — Pipeline Management

The Builder tab is the central control panel for managing data ingestion pipelines:

**Key Features:**
- **Text-to-KG Pipeline** (Complete) - Processes documents, journals, and text files. Currently showing 847 documents processed.
- **Image-to-KG Pipeline** (In Progress) - Extracts metadata, performs facial recognition, and generates semantic descriptions. Currently 67% complete (1,567 of 2,341 photos).
- **API-to-KG Pipeline** (Pending) - Connects to email, calendar, contacts, and other external APIs.
- Folder selection controls for each pipeline
- Real-time progress bars and status indicators
- Recent files list showing processed and unprocessed items

**UI Highlights:**
- Clean card-based layout with status badges
- Progress tracking with visual loading bars
- Folder path inputs with file browser buttons

---

### 2. Editor Tab — Knowledge Graph Editor

The Editor tab allows users to search, view, and manipulate nodes in the knowledge graph:

**Key Features:**
- Global search across all node types
- Node property editing
- Manual node linking/unlinking
- Create new nodes
- Delete nodes with cascade warnings

**UI Highlights:**
- Color-coded node type badges (Person, Photo, Document, Place, Event)
- Property display with key-value pairs
- Action buttons: Edit, Link, Delete for each node

---

### 3. Query Tab — Natural Language Query

The Query tab provides an LLM-powered interface for asking questions about your archive:

**Key Features:**
- Natural language question input
- Cypher query generation
- Reference links to related KG nodes
- Source file references

**Example Query Result:**
- Input: "Show me every photo of Grandma from 2015"
- Returns: 47 photos with related nodes including Person, Place, Event, and Document references
- Shows semantic connections between entities

---

### 4. Visualization Tab — Data Visualizations

The Visualization tab provides multiple views of your archive data:

**Key Features:**
- **Stats Dashboard** - Overview counts for Documents, Photos, People, and Events
- **Timeline View** - Chronological display of events, documents, and media
- **Filters** - Date range, category, and visualization type filters
- Real-time filter updates

**Example Visualization:**
- Timeline showing Journal Entry (Dec 2024), Family Thanksgiving (Nov 2024), Summer Road Trip (Aug 2024), Emma's Graduation (May 2024), Spring Break (Mar 2024), New Year Resolutions (Jan 2024)

---

### 5. Multimedia Tab — Photo Gallery

The Multimedia tab provides a visual gallery of photos with powerful filtering:

**Key Features:**
- Filter by People, Places, Events, Year
- Thumbnail grid with hover overlays
- Full image viewer with metadata modal
- Click-to-expand functionality

**UI Highlights:**
- Responsive grid layout
- Hover reveals: title, date, location
- Modal shows: date, location, people detected, file name

---

## Visual Preview Descriptions

### Sidebar Navigation
- Logo with CMP branding (💾 icon)
- 5 navigation items with icons and badges
- Quick stats showing total counts: 847 Documents, 2,341 Photos, 156 People, 89 Places, 234 Events

### Color Scheme
- Dark theme with GitHub-inspired color palette
- Primary background: #0d1117
- Accent colors: Green (3fb950), Blue (58a6ff), Purple (a371f7), Orange (f0883e)
- Typography: DM Sans for UI, JetBrains Mono for data

### Animations
- Card fade-in animations on load
- Hover scale effects on media items
- Smooth tab transitions

---

## Technical Implementation

### Files Created
- `/workspace/project/test1/cmp-mvp/index.html` - Complete MVP (single HTML file, ~54KB)

### Dependencies
- Google Fonts (DM Sans, JetBrains Mono)
- Pure JavaScript (no external libraries required)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for desktop viewing

---

## Next Steps (Full Development)

Based on the original specification, the full platform would include:

1. **Backend Scripts**
   - Text-to-KG pipeline (already complete in spec)
   - Image-to-KG pipeline with PDF extraction, facial recognition, visual processing
   - API-to-KG pipelines for Email, Calendar, Contacts, Notes, Messaging, Financial apps

2. **Knowledge Graph**
   - Neo4j local database
   - Node types: Document, Chunk, Photo, Person, Place, Event, Message, Transaction, Activity
   - Relationships: DEPICTS, MENTIONS, ATTENDED, OCCURRED_AT, LINKED_TO, SENT/RECEIVED, PART_OF, SOURCE

3. **Desktop Application**
   - Tauri or Electron framework
   - Local Flask web app for development

4. **LLM Integration**
   - Natural language to Cypher query generation
   - Entity resolution and semantic linking
   - Hosted or local model support

---

## Access the MVP

The MVP can be viewed at:
```
/workspace/project/test1/cmp-mvp/index.html
```

Or served locally:
```bash
cd /workspace/project/test1/cmp-mvp
python3 -m http.server 8080
```
Then open: http://localhost:8080

---

*This MVP was created as a demonstration prototype for the Conservation Management Platform project.*