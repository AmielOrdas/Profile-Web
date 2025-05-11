import { showQualifications, showSkills, showLinksAndContacts } from "@/lib/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "@/lib/redux/store";

export default function Navbar() {
  const dispatch = useDispatch();

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
    <div className="relative w-full mb-4 flex flex-col items-center">
      {/* Horizontal line */}
      <div className="w-full h-[1px] gradient-line-horizontal-to-right mb-1 relative z-0" />

      {/* Items with vertical line attached to horizontal line */}
      <div className="flex justify-center gap-8 text-xs font-jetbrains font-semibold text-black mt-[-5px]">
        {/* Qualifications */}
        <div className="flex flex-col items-center group">
          <div
            className={clsx(
              "w-[1px] h-4 bg-black mb-1 transition-opacity duration-200 gradient-line-vertical",
              qualificationsVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />
          <p
            className={clsx(
              "cursor-pointer hover:text-orangeCustom75 hover:underline",
              qualificationsVisible ? "text-orangeCustom100 underline" : ""
            )}
            onClick={handleClickQualifications}
          >
            Qualifications
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-col items-center group">
          <div
            className={clsx(
              "w-[1px] h-4 bg-black mb-1 transition-opacity duration-200 gradient-line-vertical",
              skillsVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />
          <p
            className={clsx(
              "cursor-pointer hover:text-orangeCustom75 hover:underline ",
              skillsVisible ? "text-orangeCustom100 underline" : ""
            )}
            onClick={handleClickSkills}
          >
            Skills
          </p>
        </div>

        {/* Links & Contacts */}
        <div className="flex flex-col items-center group">
          <div
            className={clsx(
              "w-[1px] h-4 bg-black mb-1 transition-opacity duration-200 gradient-line-vertical",
              linksAndContactsVisible
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          />
          <p
            className={clsx(
              "cursor-pointer hover:text-orangeCustom75 hover:underline",
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
