import StoreLink from "./StoreLink";
import AppleLogo from "../assets/logos/app_store.svg";
import GoogleLogo from "../assets/logos/google_play.svg";
import GoogleLight from "../assets/logos/google_play_bright.svg";

interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ type }: StoreLinksProps) {
  if (type === BtnTypes.Standard) {
    return (
      <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">
        <StoreLink
          href="https://www.apple.com/app-store"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
          target="_blank"
          logo={AppleLogo}
          upperText="Download on the"
          lowerText="App Store"
        />
        <StoreLink
          href="https://play.google.com/"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
          target="_blank"
          logo={GoogleLogo}
          upperText="Get it on "
          lowerText="Google Play"
        />
      </div>
    );
  } else if (type === BtnTypes.Variant) {
    return (
      <>
        <StoreLink
          href="https://www.apple.com/app-store"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
          target="_blank"
          logo={AppleLogo}
          upperText="Download on the"
          lowerText="App Store"
        />
        <StoreLink
          href="https://play.google.com/"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
          target="_blank"
          logo={GoogleLight}
          upperText="Get it on "
          lowerText="Google Play"
        />
      </>
    );
  }
}

export default StoreLinks;
