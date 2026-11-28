import {
  BadgeCheck,
  Barcode,
  CalendarClock,
  CalendarDays,
  ClipboardList,
  CodeXml,
  Component,
  ContactRound,
  CreditCard,
  FileCode,
  Footprints,
  HandHeart,
  Layers3,
  LockKeyhole,
  Mail,
  MessageCircle,
  MessagesSquare,
  MoonStar,
  Package,
  PanelsTopLeft,
  ReceiptText,
  Shirt,
  Smartphone,
  Store,
  TextCursorInput,
  Timer,
  Truck,
  Video,
  WashingMachine,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';

function ArtworkTile({ icon: Icon, emphasized = false }: { icon: LucideIcon; emphasized?: boolean }) {
  return (
    <span className={emphasized ? 'featured-art-tile featured-art-tile-emphasis' : 'featured-art-tile'}>
      <Icon size={24} strokeWidth={1.65} />
    </span>
  );
}

function ArtworkFlow({ from, to }: { from: LucideIcon; to: LucideIcon }) {
  return (
    <div className="featured-art-flow">
      <ArtworkTile icon={from} />
      <span className="featured-art-connector" />
      <ArtworkTile icon={to} emphasized />
    </div>
  );
}

function ArtworkTiles({ icons }: { icons: readonly [LucideIcon, LucideIcon, LucideIcon] }) {
  return (
    <div className="featured-art-tiles">
      {icons.map((icon, index) => <ArtworkTile key={index} icon={icon} emphasized={index === 1} />)}
    </div>
  );
}

const illustrations: Record<string, { icon: LucideIcon; color: string; content: ReactNode } | undefined> = {
  mis: {
    icon: PanelsTopLeft,
    color: '#efc491',
    content: (
      <div className="featured-art-report">
        <div className="featured-art-bars"><span /><span /><span /><span /></div>
        <div className="featured-art-rows"><span /><span /><span /></div>
      </div>
    ),
  },
  funds: {
    icon: Component,
    color: '#c5afe8',
    content: <ArtworkTiles icons={[Component, CalendarDays, TextCursorInput]} />,
  },
  'mobile-webview': {
    icon: Smartphone,
    color: '#9cddbd',
    content: (
      <div className="featured-art-flow">
        <ArtworkTile icon={CodeXml} />
        <span className="featured-art-connector" />
        <div className="featured-art-phone"><span /><span /><span /></div>
      </div>
    ),
  },
  ifm: {
    icon: ContactRound,
    color: '#a1c5ee',
    content: <ArtworkFlow from={ContactRound} to={ClipboardList} />,
  },
  hyperbike: {
    icon: Truck,
    color: '#efb28d',
    content: <ArtworkFlow from={Package} to={Truck} />,
  },
  texkleen: {
    icon: WashingMachine,
    color: '#90d5e8',
    content: <ArtworkTiles icons={[Shirt, WashingMachine, CalendarClock]} />,
  },
  halobro: {
    icon: MessagesSquare,
    color: '#e8aed2',
    content: <ArtworkTiles icons={[Mail, MessagesSquare, MessageCircle]} />,
  },
  kami: {
    icon: Video,
    color: '#b7baf4',
    content: <ArtworkFlow from={Video} to={LockKeyhole} />,
  },
  'internal-business-modernization': {
    icon: Workflow,
    color: '#abd6a0',
    content: <ArtworkFlow from={FileCode} to={Layers3} />,
  },
  'arah-muslim': {
    icon: MoonStar,
    color: '#93d8bf',
    content: <ArtworkTiles icons={[CalendarClock, MoonStar, HandHeart]} />,
  },
  'payment-system-dashboard': {
    icon: CreditCard,
    color: '#a0c8f7',
    content: <ArtworkFlow from={CreditCard} to={ClipboardList} />,
  },
  siksorogo: {
    icon: Timer,
    color: '#f0bd86',
    content: <ArtworkFlow from={Footprints} to={Timer} />,
  },
  sertimedia: {
    icon: BadgeCheck,
    color: '#d2b3ec',
    content: <ArtworkFlow from={Store} to={BadgeCheck} />,
  },
  'my-kasir': {
    icon: ReceiptText,
    color: 'var(--accent-fill)',
    content: <ArtworkFlow from={Barcode} to={ReceiptText} />,
  },
};

export function ProjectIllustration({ projectId }: { projectId: string }) {
  const illustration = illustrations[projectId];
  if (!illustration) return null;

  const { icon: Icon, color, content } = illustration;
  const style: CSSProperties & { '--illustration-color': string } = { '--illustration-color': color };

  return (
    <div className="project-art featured-project-art" style={style} aria-hidden="true">
      <div className="art-window">
        <div className="art-toolbar featured-art-toolbar">
          <Icon size={14} />
          <span className="featured-art-toolbar-dots" />
        </div>
        <div className="featured-art-body">{content}</div>
      </div>
    </div>
  );
}
