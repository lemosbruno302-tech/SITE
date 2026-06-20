/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Tv,
  Film,
  Clapperboard,
  Heart,
  Smile,
  Trophy,
  Headphones,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Star,
  MessageSquare,
  ShieldCheck,
  Zap,
  Check,
  Menu,
  X,
  Send,
  Lock,
  Plus
} from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className = '', size = 24, ...props }) => {
  const iconMap: Record<string, any> = {
    TvPlay: Tv,
    Film: Film,
    Clapperboard: Clapperboard,
    BookmarkHeart: Heart,
    Smile: Smile,
    Trophy: Trophy,
    Tv: Tv,
    Headphones: Headphones,
    Sparkles: Sparkles,
    CheckCircle2: CheckCircle2,
    ArrowRight: ArrowRight,
    ChevronDown: ChevronDown,
    Star: Star,
    MessageSquare: MessageSquare,
    ShieldCheck: ShieldCheck,
    Zap: Zap,
    Check: Check,
    Menu: Menu,
    X: X,
    Send: Send,
    Lock: Lock,
    Plus: Plus
  };

  const Component = iconMap[name] || Tv;
  return <Component className={className} size={size} {...props} />;
};

export default DynamicIcon;
