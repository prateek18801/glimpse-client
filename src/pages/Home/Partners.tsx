import ExcelerateLogo from "../../assets/excelerate-logo.webp";
import GlobRecruitLogo from "../../assets/glob-recruit-logo.webp";

const Partners = () => {
    return (
        <section className="mb-24">
            <div className="mb-12 text-2xl font-semibold text-center">Brand Partners</div>
            <div className="flex gap-4 px-8">
                <a href="https://4excelerate.org/" target="_blank">
                    <div className="flex items-center justify-center h-full bg-white rounded-sm">
                        <img src={ExcelerateLogo} alt="excelerate" />
                    </div>
                </a>
                <a href="https://globallyrecruit.net/" target="_blank">
                    <div className="flex items-center justify-center h-full bg-white rounded-sm">
                        <img src={GlobRecruitLogo} alt="globally recruit" />
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Partners;
