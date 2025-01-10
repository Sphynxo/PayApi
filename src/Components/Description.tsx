export default function Description() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="px-[2.4rem] mt-[4.8rem] md:px-[4rem] md:mt-[7.6rem] xl:px-[26rem]">
        <h2 className="text-[3.2rem] text-[#36536B] font-serif text-center leading-[3.6rem] md:text-[4.8rem] xl:text-[5.6rem] md:px-[9.4rem] md:leading-[5.6rem] xl:text-start xl:px-0 xl:pr-[19rem]">
          We empower innovators by delivering access to the financial
          system
        </h2>
        <div className="flex flex-col gap-[1.6rem] mt-[4rem] items-center text-center md:flex-row md:justify-between md:items-start md:text-start md:mt-[5.4rem] xl:mt-[6.4rem]">
          <h3 className="text-[#36536B] text-[2.4rem] font-serif md:text-[3.2rem]">
            Our Vision
          </h3>
          <p className="text-[1.5rem] text-[#6C8294] leading-[2.8rem] md:w-[64%]">
            Our main goal is to build beautiful consumer experiences
            along with developer-friendly infrastructure. The result
            is an intelligent tool that gives everyone the ability to
            create amazing products that solve big problems. We are
            deeply focused on democratizing financial services through
            technology.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem] mt-[4.8rem] items-center text-center md:flex-row md:justify-between md:items-start md:text-start md:mt-[6.4rem]">
          <h3 className="text-[#36536B] text-[2.4rem] font-serif md:text-[3.2rem]">
            Our Business
          </h3>
          <p className="text-[1.5rem] text-[#6C8294] leading-[2.8rem] md:w-[64%]">
            At the core of our platform is the technical
            infrastructure APIs that connect consumers. Our innovative
            product provides key insights for businesses and
            individuals, as well as robust reporting for traditional
            financial institutions and developers.
          </p>
        </div>
      </div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/about/desktop/image-team-members.jpg"
        />
        <img
          src="/images/about/mobile/image-team-members.jpg"
          alt="team members image"
          className="w-full mt-[7.6rem] md:mt-[8rem]"
        />
      </picture>
    </div>
  );
}
