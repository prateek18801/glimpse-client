import ExcelerateLogo from "../../assets/excelerate-logo.webp";
import GlobRecruitLogo from "../../assets/glob-recruit-logo.webp";

const Partners = () => {
    return (
        <section className="mb-24">
            <div className="mb-12 text-2xl font-semibold text-center">Brand Partners</div>
            <div className="flex items-center justify-center gap-4 px-8 md:gap-8">
                <a href="https://4excelerate.org/" target="_blank">
                    <img src={ExcelerateLogo} className="w-52" alt="excelerate" />
                </a>
                <a href="https://globallyrecruit.net/" target="_blank">
                    <img src={GlobRecruitLogo} className="h-28" alt="globally recruit" />
                </a>
            </div>
        </section>
    );
}

export default Partners;
