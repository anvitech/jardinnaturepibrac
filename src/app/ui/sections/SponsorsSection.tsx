import ButtonImage from '../ButtonImage';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-8 px-4 w-full">
      <div className="text-center flex mb-4 gap-x-8 justify-center">
        <ButtonImage
          href="https://www.laregion.fr/"
          src='images/home/sponsor_ville_pour_tous.jpg'
          alt='Sponsor Ville pour Tous'
          width={64}
          className='m-auto'
        />
        <ButtonImage
          href="https://www.laregion.fr/"
          src='images/home/sponsor_region_occitanie.jpg'
          alt='Sponsor Region Occitanie'
          width={64}
          className='m-auto'
        />
        <ButtonImage
          href="https://www.laregion.fr/"
          src='images/home/sponsor_hg.gif'
          alt='Sponsor Region Occitanie'
          width={64}
          className='m-auto'
        />
        <ButtonImage
          href="https://metropole.toulouse.fr/"
          src='images/home/sponsor_toulouse_metropole.jpg'
          alt='Sponsor Toulouse Metropole'
          width={64}
          className='m-auto'
        />
        <ButtonImage
          href="https://ville-pibrac.fr/"
          src='images/home/sponsor_ville_pibrac.png'
          alt='Sponsor Ville de Pibrac'
          width={64}
          className='m-auto'
        />
      </div>

    </section>
  )
}
