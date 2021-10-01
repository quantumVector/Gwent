import Thaler from '../../assets/decks/Neverland/Thaler.png';
import BlueStripesCommando from '../../assets/decks/Neverland/Blue Stripes Commando.png';
import SigismundDijkstra from '../../assets/decks/Neverland/Sigismund Dijkstra.png';
import PrinceStennis from '../../assets/decks/Neverland/Prince Stennis.png';
import CrinfridReaversDragonHunter from '../../assets/decks/Neverland/Crinfrid Reavers Dragon Hunter.png';
import DunBannerMedic from '../../assets/decks/Neverland/Dun Banner Medic.png';
import Catapult from '../../assets/decks/Neverland/Catapult.png';
import VernonRoche from '../../assets/decks/Neverland/Vernon Roche.png';
import EsteradThyssen from '../../assets/decks/Neverland/Esterad Thyssen.png';
import JohnNatalis from '../../assets/decks/Neverland/John Natalis.png';
import PhilippaEilhart from '../../assets/decks/Neverland/Philippa Eilhart.png';
import Dandelion from '../../assets/neutralCards/Dandelion.png';
import Villentretenmerth from '../../assets/neutralCards/Villentretenmerth.png';
import YenneferOfVengerberg from '../../assets/neutralCards/Yennefer of Vengerberg.png';
import Avallach from '../../assets/neutralCards/Avallach.png';
import Cirilla from '../../assets/neutralCards/Cirilla Fiona Elen Rianno.png';
import Geralt from '../../assets/neutralCards/Geralt of Rivia.png';
import Decoy from '../../assets/specialCards/Decoy.png';
import CommandersHorn from '../../assets/specialCards/Commanders Horn.png';
import face from '../../assets/cardFaces/Neverland.png'

const userDeck = {
  face,
  cards: [
    {
      title: 'Талер',
      power: 1,
      type: 'siege',
      ability: 'spy',
      img: Thaler,
      id: 'u1'
    },
    {
      title: 'Боец Синих Полосок',
      power: 4,
      type: 'melee',
      ability: 'bond',
      img: BlueStripesCommando,
      id: 'u2'
    },
    {
      title: 'Боец Синих Полосок',
      power: 4,
      type: 'melee',
      ability: 'bond',
      img: BlueStripesCommando,
      id: 'u3'
    },
    {
      title: 'Боец Синих Полосок',
      power: 4,
      type: 'melee',
      ability: 'bond',
      img: BlueStripesCommando,
      id: 'u4'
    },
    {
      title: 'Сигизмунд Дийкстра',
      power: 4,
      type: 'melee',
      ability: 'spy',
      img: SigismundDijkstra,
      id: 'u5'
    },
    {
      title: 'Принц Стеннис',
      power: 5,
      type: 'melee',
      ability: 'spy',
      img: PrinceStennis,
      id: 'u6'
    },
    {
      title: 'Рубайлы из Кринфрида',
      power: 5,
      type: 'ranged',
      ability: 'bond',
      img: CrinfridReaversDragonHunter,
      id: 'u7'
    },
    {
      title: 'Рубайлы из Кринфрида',
      power: 5,
      type: 'ranged',
      ability: 'bond',
      img: CrinfridReaversDragonHunter,
      id: 'u8'
    },
    {
      title: 'Рубайлы из Кринфрида',
      power: 5,
      type: 'ranged',
      ability: 'bond',
      img: CrinfridReaversDragonHunter,
      id: 'u9'
    },
    {
      title: 'Лекарь Бурой Хоругви',
      power: 5,
      type: 'siege',
      ability: 'medic',
      img: DunBannerMedic,
      id: 'u10'
    },
    {
      title: 'Катапульта',
      power: 8,
      type: 'siege',
      ability: 'bond',
      img: Catapult,
      id: 'u11'
    },
    {
      title: 'Катапульта',
      power: 8,
      type: 'siege',
      ability: 'bond',
      img: Catapult,
      id: 'u12'
    },
    {
      title: 'Вернон Роше',
      power: 10,
      type: 'melee',
      ability: 'hero',
      img: VernonRoche,
      id: 'u13'
    },
    {
      title: 'Эстерад Тиссен',
      power: 10,
      type: 'melee',
      ability: 'hero',
      img: EsteradThyssen,
      id: 'u14'
    },
    {
      title: 'Ян Наталис',
      power: 10,
      type: 'melee',
      ability: 'hero',
      img: JohnNatalis,
      id: 'u15'
    },
    {
      title: 'Филиппа Эйльхарт',
      power: 10,
      type: 'ranged',
      ability: 'hero',
      img: PhilippaEilhart,
      id: 'u16'
    },
    {
      title: 'Лютик',
      power: 2,
      type: 'melee',
      ability: 'morale',
      img: Dandelion,
      id: 'u17'
    },
    {
      title: 'Виллентретенмерт',
      power: 7,
      type: 'melee',
      ability: 'scorch',
      img: Villentretenmerth,
      id: 'u18'
    },
    {
      title: 'Йеннифэр из Венгерберга',
      power: 7,
      type: 'ranged',
      ability: 'medicHero',
      img: YenneferOfVengerberg,
      id: 'u19'
    },
    {
      title: 'Таинственный эльф',
      power: 0,
      type: 'melee',
      ability: 'spyHero',
      img: Avallach,
      id: 'u20'
    },
    {
      title: 'Цирилла',
      power: 15,
      type: 'melee',
      ability: 'hero',
      img: Cirilla,
      id: 'u21'
    },
    {
      title: 'Геральт из Ривии',
      power: 15,
      type: 'melee',
      ability: 'hero',
      img: Geralt,
      id: 'u22'
    },
    {
      title: 'Чучело',
      power: 0,
      type: 'decoy',
      ability: 'decoy',
      img: Decoy,
      id: 'u23'
    },
    {
      title: 'Чучело',
      power: 0,
      type: 'decoy',
      ability: 'decoy',
      img: Decoy,
      id: 'u24'
    },
    {
      title: 'Командирский рог',
      power: 0,
      type: 'modifieMelee',
      ability: 'morale',
      img: CommandersHorn,
      id: 'u25'
    },
  ]
};

export default userDeck;