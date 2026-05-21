/**
 * Layout API Routes
 * 
 * These are placeholder endpoints for future SolidWorks integration.
 * Currently they simulate saving/loading configurations.
 */

import { NextResponse } from 'next/server';

// Mock database - in production this would connect to a real DB
const layouts: Map<string, any> = new Map();

/**
 * GET /api/layouts
 * List all saved layouts
 */
export async function GET() {
  const allLayouts = Array.from(layouts.entries()).map(([id, layout]) => ({
    id,
    name: layout.name,
    createdAt: layout.createdAt,
    updatedAt: layout.updatedAt,
    trailer: layout.trailer,
    componentCount: layout.components?.length || 0,
  }));

  return NextResponse.json({
    success: true,
    data: allLayouts,
  });
}

/**
 * POST /api/layouts
 * Save a new layout
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, trailer, components } = body;
    
    if (!name || !trailer || !components) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const id = `layout-${Date.now()}`;
    const layout = {
      id,
      name,
      trailer,
      components,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    layouts.set(id, layout);

    // Generate BOM from components
    const bom = generateBOM(components);
    
    // Generate cut list
    const cutList = generateCutList(components);

    return NextResponse.json({
      success: true,
      data: {
        id,
        name: layout.name,
        createdAt: layout.createdAt,
        bom,
        cutList,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

/**
 * Generate Bill of Materials from components
 */
function generateBOM(components: any[]): any[] {
  const bom = new Map();

  components.forEach((comp) => {
    const key = `${comp.type}-${comp.category}`;
    if (bom.has(key)) {
      const existing = bom.get(key);
      existing.quantity += 1;
    } else {
      bom.set(key, {
        type: comp.type,
        category: comp.category,
        name: comp.name,
        quantity: 1,
        dimensions: `${comp.width}x${comp.height}`,
      });
    }
  });

  return Array.from(bom.values());
}

/**
 * Generate cut list for manufacturing
 */
function generateCutList(components: any[]): any[] {
  return components
    .filter((comp) => comp.category === 'walls' || comp.category === 'cabinets')
    .map((comp) => ({
      id: comp.id,
      type: comp.type,
      material: 'Aluminum 6061-T6',
      length: comp.width,
      width: comp.height,
      thickness: '2mm',
      quantity: 1,
    }));
}
