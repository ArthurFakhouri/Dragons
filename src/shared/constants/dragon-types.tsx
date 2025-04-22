import { FaFire, FaLeaf, FaRegSnowflake } from "react-icons/fa";
import { GiDragonShield, GiDragonSpiral, GiJusticeStar, GiSpikyExplosion } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { MdAir } from "react-icons/md";
import { SiRedragon } from "react-icons/si";
import { TbPentagram } from "react-icons/tb";

export const dragonTypes = {
  fogo: {
    title: 'Fogo',
    icon: <FaFire size={24} style={{ color: '#e32d18' }} />
  },
  agua: {
    title: 'Água',
    icon: <IoIosWater size={24} style={{ color: '#1847e3' }} />
  },
  jardim: {
    title: 'Jardim',
    icon: <FaLeaf size={24} style={{ color: '#106b2a' }} />
  },
  air: {
    title: 'Vento',
    icon: <MdAir size={24} style={{ color: '#b6a893' }} />
  },
  dourado: {
    title: 'Dourado',
    icon: <GiDragonSpiral size={24} style={{ color: '#e3c587' }} />
  },
  'fúria': {
    title: 'Fúria',
    icon: <TbPentagram size={24} style={{ color: '#ee6161' }} />
  },
  'valiriano': {
    title: 'Valiriano',
    icon: <GiDragonShield size={24} style={{ color: '#ffdd07' }} />
  },
  'gelo': {
    title: 'Gelo',
    icon: <FaRegSnowflake size={24} style={{ color: '#18d9e3' }} />
  },
  'caos': {
    title: 'Caos',
    icon: <GiSpikyExplosion size={24} style={{ color: '#761d76' }} />
  },
  'sagrado': {
    title: 'Sagrado',
    icon: <SiRedragon size={24} style={{ color: '#238e74' }} />
  },
  'estelar': {
    title: 'Estelar',
    icon: <GiJusticeStar size={24} style={{ color: '#1f4989' }} />
  },
}