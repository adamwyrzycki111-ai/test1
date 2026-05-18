/**
 * TypeScript Interfaces for Trailer Configurator
 * 
 * These types define the core data structures used throughout the application.
 * They are designed to be compatible with future SolidWorks automation.
 */

// ============================================
// Trailer Types
// ============================================

export interface TrailerDimensions {
  length: number;  // in millimeters
  width: number;   // in millimeters
}

export interface Trailer {
  id?: string;
  name?: string;
  dimensions: TrailerDimensions;
  createdAt?: string;
  updatedAt?: string;
}

// ============================================
// Component Types
// ============================================

export type ComponentCategory = 
  | 'walls'
  | 'doors'
  | 'windows'
  | 'cabinets'
  | 'equipment'
  | 'electrical'
  | 'plumbing'
  | 'furniture';

export interface ComponentBase {
  id: string;
  name: string;
  category: ComponentCategory;
  type: string;
}

export interface ComponentDimensions {
  width: number;   // in millimeters
  height: number;  // in millimeters
}

export interface ComponentPosition {
  x: number;  // in millimeters
  y: number;  // in millimeters
}

export interface ComponentRotation {
  rotation: number;  // in degrees (0, 90, 180, 270)
}

export interface TrailerComponent extends ComponentBase, ComponentDimensions, ComponentPosition, ComponentRotation {
  // Component-specific properties
  material?: Material;
  manufacturingData?: ManufacturingData;
}

// ============================================
// Material Types
// ============================================

export interface Material {
  id: string;
  name: string;
  type: 'aluminum' | 'steel' | 'wood' | 'composite' | 'other';
  thickness?: number;  // in mm
  finish?: string;
  costPerUnit?: number;
}

export interface ManufacturingData {
  process: 'cut' | 'weld' | 'bend' | 'fasten' | 'finish';
  machine?: string;
  laborHours?: number;
  notes?: string;
}

// ============================================
// Layout Types
// ============================================

export interface LayoutConfiguration {
  trailer: TrailerDimensions;
  components: TrailerComponent[];
  metadata?: LayoutMetadata;
}

export interface LayoutMetadata {
  name?: string;
  version?: string;
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  tags?: string[];
}

// ============================================
// BOM Types
// ============================================

export interface BOMItem {
  type: string;
  category: ComponentCategory;
  name: string;
  quantity: number;
  dimensions: string;
  material?: Material;
  unitCost?: number;
  totalCost?: number;
}

export interface BillOfMaterials {
  items: BOMItem[];
  totalQuantity: number;
  estimatedCost?: number;
}

// ============================================
// Cut List Types
// ============================================

export interface CutListItem {
  id: string;
  type: string;
  material: string;
  length: number;   // in mm
  width: number;   // in mm
  thickness: number;
  quantity: number;
  notes?: string;
}

export interface CutList {
  items: CutListItem[];
  totalPieces: number;
}

// ============================================
// API Response Types
// ============================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface LayoutSummary {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  trailer: TrailerDimensions;
  componentCount: number;
}

// ============================================
// Canvas State Types
// ============================================

export interface CanvasTransform {
  zoom: number;
  panX: number;
  panY: number;
}

export interface SelectionState {
  selectedIds: string[];
  clipboard: TrailerComponent | null;
}

export interface HistoryState {
  past: LayoutConfiguration[];
  future: LayoutConfiguration[];
}

export interface EditorState {
  layout: LayoutConfiguration;
  canvas: CanvasTransform;
  selection: SelectionState;
  history: HistoryState;
  tool: 'select' | 'pan' | 'add' | 'draw';
  gridSize: number;
  snapToGrid: boolean;
}

// ============================================
// Component Library Types
// ============================================

export interface ComponentDefinition {
  id: string;
  name: string;
  category: ComponentCategory;
  type: string;
  icon: string;
  width: number;
  height: number;
  defaultMaterial?: Material;
  manufacturingProcess?: string;
}

export interface ComponentLibrary {
  [category: string]: ComponentDefinition[];
}

// ============================================
// SolidWorks Integration Types (Future)
// ============================================

export interface SolidWorksMapping {
  componentToFeature: Map<string, string>;
  materialToMaterialDef: Map<string, string>;
}

export interface CADExportOptions {
  includeBillOfMaterials: boolean;
  includeCutList: boolean;
  includeDrawings: boolean;
  sheetMetalThickness?: number;
  assemblyUnits: 'mm' | 'inches';
}

export interface SolidWorksExportRequest {
  layout: LayoutConfiguration;
  options: CADExportOptions;
}
