import { showQualifications, showSkills, showLinksAndContacts } from "@/lib/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx"; // import clsx for conditional class names
import { RootState } from "@/lib/redux/store";
export default function Navbar() {
  const dispatch = useDispatch();
  // Select states from Redux
  const qualificationsVisible = useSelector(
    (state: RootState) => state.qualifications.isVisible
  );
  const skillsVisible = useSelector((state: RootState) => state.skills.isVisible);
  const linksAndContactsVisible = useSelector(
    (state: RootState) => state.linksAndContacts.isVisible
  );

  function handleClickQualifications() {
    dispatch(showQualifications(true));
    dispatch(showSkills(false));
    dispatch(showLinksAndContacts(false));
  }

  function handleClickSkills() {
    dispatch(showSkills(true));
    dispatch(showLinksAndContacts(false));
    dispatch(showQualifications(false));
  }

  function handleClickLinksAndContacts() {
    dispatch(showLinksAndContacts(true));
    dispatch(showSkills(false));
    dispatch(showQualifications(false));
  }

  return (
    <div className="relative w-full mb-4">
      {/* Horizontal line */}
      <div className="w-full h-[1px] gradient-line-horizontal-to-right"></div>

      {/* Container for text and dividers */}
      <div className="flex justify-center items-center text-xs font-jetbrains font-semibold text-black relative ">
        {/* Left side text */}
        <div className="flex-1 text-right">
          <p
            className={clsx(
              "mr-3 cursor-pointer hover:text-orangeCustom75  hover:underline",
              qualificationsVisible ? "text-orangeCustom100 underline" : ""
            )}
            onClick={handleClickQualifications}
          >
            Qualifications
          </p>
        </div>
        {/* Vertical divider */}
        <div className="w-[0.5px] h-8 gradient-line-vertical"></div>
        {/* Right side text */}
        <div className="text-center">
          <p
            className={clsx(
              "px-2 cursor-pointer hover:text-orangeCustom75  hover:underline",
              skillsVisible ? "text-orangeCustom100 underline" : ""
            )}
            onClick={handleClickSkills}
          >
            Skills
          </p>
        </div>
        {/* Vertical divider */}
        <div className="w-[0.5px] h-8 gradient-line-vertical"></div>
        {/* Right side text */}
        <div className="flex-1 text-left">
          <p
            className={clsx(
              "ml-2 cursor-pointer hover:text-orangeCustom75 hover:underline",
              linksAndContactsVisible ? "text-orangeCustom100 underline" : ""
            )}
            onClick={handleClickLinksAndContacts}
          >
            Links & Contacts
          </p>
        </div>
      </div>
    </div>
  );
}
