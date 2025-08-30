// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";

// ================================
// Importing Hooks
// ================================
import { useEffect } from "react";
import { useLocation } from "react-router";

// ================================
// TitleUpdater  Component
// ================================
const titles = {
  "/": "منصه تريبل - الرئيسية",
  "/tracks": "منصه تريبل - المسارات التعليمية",
  "/courses": "منصه تريبل - الكورسات",
  "/exercises": "منصه تريبل - التمارين والمشاريع",
  "/articles": "منصه تريبل - المقالات ",
  "/community": "منصه تريبل - المجتمع ",
  "/codeEditor": "منصه تريبل - محرر الاكواد ",
  "/signin": "منصه تريبل -  تسجيل الدخول",
  "/signup": "منصه تريبل - أنشاء حساب",
};
function TitleUpdater({ titleParam = "صفحة غير معروقة" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = titles[pathname] || `منصه تريبل - ${titleParam}`;
    document.title = title;
  }, [pathname, titleParam]);
  return null;
}

// ================================
//  PropTypes Validation
// ================================
TitleUpdater.PropTypes = {
  titleParam: PropTypes.string,
};

export default TitleUpdater;
