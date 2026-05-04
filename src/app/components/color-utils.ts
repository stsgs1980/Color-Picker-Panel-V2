// Color utility functions

export function hslToHex(h: number, s: number, l: number): string {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

export function hexToHsl(hex: string): [number, number, number] {
  let r = 0, g = 0, b = 0;
  const clean = hex.replace('#', '');
  if (clean.length === 6) {
    r = parseInt(clean.slice(0, 2), 16) / 255;
    g = parseInt(clean.slice(2, 4), 16) / 255;
    b = parseInt(clean.slice(4, 6), 16) / 255;
  }
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join('').toUpperCase();
}

export function generateColorVariants(h: number, s: number, l: number): string[] {
  return [
    hslToHex(h, Math.min(s * 0.6, 100), Math.min(l + 25, 90)),
    hslToHex(h, Math.min(s * 0.8, 100), Math.min(l + 12, 80)),
    hslToHex(h, s, l),
    hslToHex(h, Math.min(s + 5, 100), Math.max(l - 20, 10)),
    hslToHex(h, Math.min(s + 10, 100), Math.max(l - 35, 5)),
  ];
}

// HTML named colors (CSS Color Level 4)
export const HTML_COLORS: { name: string; hex: string }[] = [
  { name: 'AliceBlue', hex: '#F0F8FF' },
  { name: 'AntiqueWhite', hex: '#FAEBD7' },
  { name: 'Aqua', hex: '#00FFFF' },
  { name: 'Aquamarine', hex: '#7FFFD4' },
  { name: 'Azure', hex: '#F0FFFF' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Bisque', hex: '#FFE4C4' },
  { name: 'Black', hex: '#000000' },
  { name: 'BlanchedAlmond', hex: '#FFEBCD' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'BlueViolet', hex: '#8A2BE2' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'BurlyWood', hex: '#DEB887' },
  { name: 'CadetBlue', hex: '#5F9EA0' },
  { name: 'Chartreuse', hex: '#7FFF00' },
  { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'CornflowerBlue', hex: '#6495ED' },
  { name: 'Cornsilk', hex: '#FFF8DC' },
  { name: 'Crimson', hex: '#DC143C' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'DarkBlue', hex: '#00008B' },
  { name: 'DarkCyan', hex: '#008B8B' },
  { name: 'DarkGoldenRod', hex: '#B8860B' },
  { name: 'DarkGray', hex: '#A9A9A9' },
  { name: 'DarkGreen', hex: '#006400' },
  { name: 'DarkKhaki', hex: '#BDB76B' },
  { name: 'DarkMagenta', hex: '#8B008B' },
  { name: 'DarkOliveGreen', hex: '#556B2F' },
  { name: 'DarkOrange', hex: '#FF8C00' },
  { name: 'DarkOrchid', hex: '#9932CC' },
  { name: 'DarkRed', hex: '#8B0000' },
  { name: 'DarkSalmon', hex: '#E9967A' },
  { name: 'DarkSeaGreen', hex: '#8FBC8F' },
  { name: 'DarkSlateBlue', hex: '#483D8B' },
  { name: 'DarkSlateGray', hex: '#2F4F4F' },
  { name: 'DarkTurquoise', hex: '#00CED1' },
  { name: 'DarkViolet', hex: '#9400D3' },
  { name: 'DeepPink', hex: '#FF1493' },
  { name: 'DeepSkyBlue', hex: '#00BFFF' },
  { name: 'DimGray', hex: '#696969' },
  { name: 'DodgerBlue', hex: '#1E90FF' },
  { name: 'FireBrick', hex: '#B22222' },
  { name: 'FloralWhite', hex: '#FFFAF0' },
  { name: 'ForestGreen', hex: '#228B22' },
  { name: 'Fuchsia', hex: '#FF00FF' },
  { name: 'Gainsboro', hex: '#DCDCDC' },
  { name: 'GhostWhite', hex: '#F8F8FF' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'GoldenRod', hex: '#DAA520' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Green', hex: '#008000' },
  { name: 'GreenYellow', hex: '#ADFF2F' },
  { name: 'HoneyDew', hex: '#F0FFF0' },
  { name: 'HotPink', hex: '#FF69B4' },
  { name: 'IndianRed', hex: '#CD5C5C' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Ivory', hex: '#FFFFF0' },
  { name: 'Khaki', hex: '#F0E68C' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'LavenderBlush', hex: '#FFF0F5' },
  { name: 'LawnGreen', hex: '#7CFC00' },
  { name: 'LemonChiffon', hex: '#FFFACD' },
  { name: 'LightBlue', hex: '#ADD8E6' },
  { name: 'LightCoral', hex: '#F08080' },
  { name: 'LightCyan', hex: '#E0FFFF' },
  { name: 'LightGoldenRodYellow', hex: '#FAFAD2' },
  { name: 'LightGray', hex: '#D3D3D3' },
  { name: 'LightGreen', hex: '#90EE90' },
  { name: 'LightPink', hex: '#FFB6C1' },
  { name: 'LightSalmon', hex: '#FFA07A' },
  { name: 'LightSeaGreen', hex: '#20B2AA' },
  { name: 'LightSkyBlue', hex: '#87CEFA' },
  { name: 'LightSlateGray', hex: '#778899' },
  { name: 'LightSteelBlue', hex: '#B0C4DE' },
  { name: 'LightYellow', hex: '#FFFFE0' },
  { name: 'Lime', hex: '#00FF00' },
  { name: 'LimeGreen', hex: '#32CD32' },
  { name: 'Linen', hex: '#FAF0E6' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'MediumAquaMarine', hex: '#66CDAA' },
  { name: 'MediumBlue', hex: '#0000CD' },
  { name: 'MediumOrchid', hex: '#BA55D3' },
  { name: 'MediumPurple', hex: '#9370DB' },
  { name: 'MediumSeaGreen', hex: '#3CB371' },
  { name: 'MediumSlateBlue', hex: '#7B68EE' },
  { name: 'MediumSpringGreen', hex: '#00FA9A' },
  { name: 'MediumTurquoise', hex: '#48D1CC' },
  { name: 'MediumVioletRed', hex: '#C71585' },
  { name: 'MidnightBlue', hex: '#191970' },
  { name: 'MintCream', hex: '#F5FFFA' },
  { name: 'MistyRose', hex: '#FFE4E1' },
  { name: 'Moccasin', hex: '#FFE4B5' },
  { name: 'NavajoWhite', hex: '#FFDEAD' },
  { name: 'Navy', hex: '#000080' },
  { name: 'OldLace', hex: '#FDF5E6' },
  { name: 'Olive', hex: '#808000' },
  { name: 'OliveDrab', hex: '#6B8E23' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'OrangeRed', hex: '#FF4500' },
  { name: 'Orchid', hex: '#DA70D6' },
  { name: 'PaleGoldenRod', hex: '#EEE8AA' },
  { name: 'PaleGreen', hex: '#98FB98' },
  { name: 'PaleTurquoise', hex: '#AFEEEE' },
  { name: 'PaleVioletRed', hex: '#DB7093' },
  { name: 'PapayaWhip', hex: '#FFEFD5' },
  { name: 'PeachPuff', hex: '#FFDAB9' },
  { name: 'Peru', hex: '#CD853F' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Plum', hex: '#DDA0DD' },
  { name: 'PowderBlue', hex: '#B0E0E6' },
  { name: 'Purple', hex: '#800080' },
  { name: 'RebeccaPurple', hex: '#663399' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'RosyBrown', hex: '#BC8F8F' },
  { name: 'RoyalBlue', hex: '#4169E1' },
  { name: 'SaddleBrown', hex: '#8B4513' },
  { name: 'Salmon', hex: '#FA8072' },
  { name: 'SandyBrown', hex: '#F4A460' },
  { name: 'SeaGreen', hex: '#2E8B57' },
  { name: 'SeaShell', hex: '#FFF5EE' },
  { name: 'Sienna', hex: '#A0522D' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'SkyBlue', hex: '#87CEEB' },
  { name: 'SlateBlue', hex: '#6A5ACD' },
  { name: 'SlateGray', hex: '#708090' },
  { name: 'Snow', hex: '#FFFAFA' },
  { name: 'SpringGreen', hex: '#00FF7F' },
  { name: 'SteelBlue', hex: '#4682B4' },
  { name: 'Tan', hex: '#D2B48C' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Thistle', hex: '#D8BFD8' },
  { name: 'Tomato', hex: '#FF6347' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Wheat', hex: '#F5DEB3' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'WhiteSmoke', hex: '#F5F5F5' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'YellowGreen', hex: '#9ACD32' },
];

function colorDistance(hex1: string, hex2: string): number {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

export function getHtmlColorName(hex: string): string {
  let best = HTML_COLORS[0];
  let bestDist = colorDistance(hex, best.hex);
  for (const c of HTML_COLORS) {
    const d = colorDistance(hex, c.hex);
    if (d < bestDist) { bestDist = d; best = c; }
  }
  return best.name;
}

export function getHtmlColorByName(name: string): string | null {
  const found = HTML_COLORS.find(c => c.name.toLowerCase() === name.toLowerCase());
  return found ? found.hex : null;
}

export type PresetItem = { name: string; h: number; s: number; l: number };
export type PresetGroup = { group: string | null; items: PresetItem[] };

export const PRESET_GROUPS: PresetGroup[] = [
  {
    group: null,
    items: [{ name: 'Схема по умолчанию', h: 228, s: 100, l: 50 }],
  },
  {
    group: 'Контрастность :',
    items: [
      { name: 'Больше контраста', h: 228, s: 100, l: 38 },
      { name: 'Высокий контраст', h: 228, s: 95, l: 30 },
      { name: 'Максимум контраста', h: 228, s: 100, l: 22 },
      { name: 'Меньше контраста', h: 228, s: 70, l: 55 },
      { name: 'Низкий контраст', h: 228, s: 50, l: 62 },
      { name: 'Минимум контраста', h: 228, s: 30, l: 70 },
    ],
  },
  {
    group: 'Насыщенность :',
    items: [
      { name: 'Средне-тёмный (насыщенный)', h: 228, s: 90, l: 35 },
      { name: 'Тёмный (насыщенный)', h: 228, s: 85, l: 25 },
      { name: 'Очень тёмный (насыщенный)', h: 228, s: 80, l: 18 },
    ],
  },
  {
    group: 'Пастельные тона :',
    items: [
      { name: 'Пастельный', h: 228, s: 45, l: 75 },
      { name: 'Средне-тёмный пастельный', h: 228, s: 40, l: 65 },
      { name: 'Тёмный пастельный', h: 228, s: 35, l: 55 },
      { name: 'Очень тёмный пастельный', h: 228, s: 30, l: 45 },
      { name: 'Мягкий бледный пастельный', h: 228, s: 25, l: 85 },
      { name: 'Средний бледный пастельный', h: 228, s: 20, l: 78 },
      { name: 'Тёмный бледный пастельный', h: 228, s: 18, l: 68 },
      { name: 'Очень тёмный бледный пастельный', h: 228, s: 15, l: 58 },
    ],
  },
  {
    group: 'Полутона :',
    items: [
      { name: 'Полутон (лёгкий)', h: 228, s: 15, l: 80 },
      { name: 'Серый полутон с цветовым акцентом (лёгкий)', h: 228, s: 30, l: 78 },
      { name: 'Серый полутон (средний)', h: 228, s: 10, l: 60 },
      { name: 'Серый полутон с цветовым акцентом (средний)', h: 228, s: 25, l: 58 },
      { name: 'Серый полутон (тёмный)', h: 228, s: 8, l: 40 },
      { name: 'Серый полутон с цветовым акцентом (тёмный)', h: 228, s: 20, l: 38 },
    ],
  },
];

export const PRESETS: PresetItem[] = PRESET_GROUPS.flatMap(g => g.items);
