import { KTSVG } from "../../../_metronic/helpers";

const cardsInfo = [
  {
    number: 252,
    theme: "primary",
    title: "Links scraped",
    iconType: "duotune",
    icon: "/media/icons/duotune/coding/cod008.svg",
  },
  {
    number: 252,
    theme: "info",
    title: "Links manually checked",
    iconType: "duotune",
    icon: "/media/icons/duotune/general/gen021.svg",
  },
  {
    number: 252,
    theme: "warning",
    title: "Links violations",
    iconType: "bss",
    icon: "bi-exclamation-diamond",
  },
  {
    number: 252,
    theme: "danger",
    title: "Links removed",
    iconType: "bss",
    icon: "bi-trash",
  },
];

export function CardsGroup() {
  return (
    <div className='d-flex w-100 gap-16 mb-10'>
      {cardsInfo.map((card, index) => (
        <div
          className='card w-100 p-10 d-flex flex-column justify-content-between'
          key={`card-index-${index}`}
        >
          <div className='d-flex flex-row justify-content-between align-items-start'>
            <span className='text-gray-900 fs-2hx fw-semibold'>
              {card.number}
            </span>
            {card.iconType === "duotune" && (
              <span className={`badge badge-light-${card.theme}`}>
                <KTSVG
                  path={card.icon}
                  className={`svg-icon-${card.theme} svg-icon-2hx`}
                />
              </span>
            )}
            {card.iconType === "bss" && (
              <span className={`badge badge-light-${card.theme}`}>
                <i className={`bi ${card.icon} fs-2hx text-${card.theme}`}></i>
              </span>
            )}
          </div>
          <div className='text-gray-700 fs-16px fw-medium'>{card.title}</div>
        </div>
      ))}
    </div>
  );
}
