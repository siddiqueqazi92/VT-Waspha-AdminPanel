const arabicMessages = {
  ra: {
    action: {
      add_filter: "إضافة فلتر",
      add: "إضافة",
      back: "العودة",
      bulk_actions: "%{smart_count} العناصر المحددة",
      cancel: "إلغاء",
      clear_input_value: "إفراغ المدخلات",
      clone: "استنساخ",
      confirm: "تأكيد",
      create: "إنشاء",
      delete: "حذف",
      edit: "تعديل",
      export: "تصدير",
      list: "قائمة",
      refresh: "إعادة تحميل",
      remove_filter: "إزالة هذا الفلتر",
      remove: "إزالة",
      save: "حفظ",
      search: "بحث",
      show: "عرض التفاصيل",
      sort: "فرز",
      undo: "تراجع",
      expand: "فرد",
      close: "اغلاق",
      clear_zone: "منطقة واضحة",
    },
    boolean: {
      true: "نعم",
      false: "لا",
      null: "",
    },
    page: {
      create: "إنشاء %{name}",
      dashboard: "لوحة الإحصائيات",
      edit: "%{name} #%{id}",
      error: "هناك خطأ ما",
      list: "%{name}",
      loading: "جار التحميل",
      not_found: "غير موجود",
      show: "%{name} #%{id}",
      empty: "لا يوجد %{name} حتي الان",
      invite: "هل ترغب فى اضافة واحد؟",
    },
    input: {
      file: {
        upload_several: "إسقاط بعض الملفات للتحميل، أو انقر لتحديد واحد.",
        upload_single: "إسقاط ملف للتحميل، أو انقر لتحديده.",
      },
      image: {
        upload_several: "قم بإسقاط بعض الصور للتحميل، أو انقر لتحديد واحدة.",
        upload_single: "إسقاط صورة للتحميل، أو انقر لتحديدها.",
      },
      references: {
        all_missing: "غير قادر على العثور على بيانات المراجع.",
        many_missing: "واحد على الأقل من المراجع المرتبطة لم تعد متوفرة.",
        single_missing: "المرجع المرتبط لم يعد يبدو متاحًا.",
      },
      password: {
        toggle_visible: "اخفاء الرقم السري",
        toggle_hidden: "اظهار الرقم السري",
      },
    },
    message: {
      about: "حول",
      are_you_sure: "هل أنت واثق؟",
      bulk_delete_content:
        "هل أنت متأكد أنك تريد حذف هذا %{name}? |||| هل أنت متأكد من أنك تريد حذف هذه العناصر%{smart_count}?",
      bulk_delete_title: "حذف %{name} |||| احذف عناصر%{smart_count}%{name}",
      delete_content: "هل أنت متأكد أنك تريد حذف هذا البند؟",
      delete_title: "حذف %{name} #%{id}",
      details: "تفاصيل",
      error: "حدث خطأ في التطبيق ولم يمكن إكمال طلبك.",
      invalid_form: "النموذج غير صالح. يرجى التحقق من وجود أخطاء",
      loading: "يتم تحميل الصفحة، فقط لحظة من فضلك",
      no: "لا",
      not_found: "الصفحة غير موجودة",
      yes: "نعم ",
    },
    navigation: {
      no_results: "لا توجد نتائج",
      no_more_results: "رقم الصفحة%{page} خارج الحدود. جرب الصفحة السابقة.",
      page_out_of_boundaries: "رقم الصفحة%{page} خارج الحدود",
      page_out_from_end: "لا يمكن الذهاب بعد الصفحة الأخيرة",
      page_out_from_begin: "لا يمكن الذهاب قبل الصفحة الأولى",
      page_range_info: "%{offsetBegin}-%{offsetEnd} من %{total}",
      page_rows_per_page: "الصفوف لكل صفحة:",
      next: "التالى",
      prev: "السابق",
    },
    auth: {
      auth_check_error: "الرجاء تسجيل الدخول للاستمرار",
      user_menu: "الملف الشخصي",
      username: "اسم المستخدم",
      password: "كلمة السر",
      sign_in: "تسجيل الدخول",
      sign_in_error: "أخفقت المصادقة، يرجى إعادة المحاولة",
      logout: "الخروج",
    },
    notification: {
      updated: "تم تحديث العنصر |||| تم تحديث%{smart_count} من العناصر",
      created: "تم إنشاء العنصر",
      deleted: "تم حذف العنصر |||| تم حذف%{smart_count} من العناصر",
      bad_item: "عنصر غير صحيح",
      item_doesnt_exist: "العنصر غير موجود",
      http_error: "خطأ في اتصال الخادم",
      i18n_error: "لا يمكن تحميل الترجمة لهذه اللغة",
      data_provider_error:
        "خطأ في مزود البيانات. تحقق من وحدة التحكم للحصول على التفاصيل.",
      canceled: "تم إلغاء الإجراء",
      logged_out: "انتهت جلستك، يرجى إعادة الاتصال.",
    },
    validation: {
      required: "مطلوب",
      minLength: "يجب أن يكون%{min} حرفًا على الأقل",
      maxLength: "يجب أن يكون%{max} حرفًا أو أقل",
      minValue: "يجب أن يكون%{min} على الأقل",
      maxValue: "يجب أن يكون%{max} أو أقل",
      number: "يجب أن يكون رقما",
      email: "يجب أن يكون بريدًا إلكترونيًا صالحًا",
      oneOf: "يجب أن يكون واحدًا من:%{options}",
      regex: "يجب أن يتطابق مع تنسيق محدد (regex):%{pattern}",
    },

    strings: {
      id: "هوية شخصية",
      name: "اسم",
      email: "البريد الإلكتروني",
      phone: "هاتف",
      wallets: "محافظ",
      rfps: "طلب تقديم عرض",
      avatar: "الصوره الشخصيه",
      detail: "التفاصيل",
      reviews: "استعراض",
      review: "مراجعة",
      reviewed_by: "المراجع",
      rating: "تقييم",
      na: "غير متوفر",
      order: "طلب",
      orders: "الطلب",
      users: "المستخدمين",
      categories: "التصنيفات",
      vendors: "الباعة",
      delivery_partners: "شركاء التوصيل",
      slug: "سبيكة",
      parent_category: "القسم الرئيسي",
      created_at: "أنشئت في",
      approved: "وافق",
      address: "عنوان",
      is_online: "متصل",
      delivery: "توصيل",
      pickup: "امسك",
      proposal_selection_time: "وقت اختيار الاقتراح",
      proposal_prep_time: "وقت إعداد الاقتراح",
      timings: "توقيت",
      subcategories: "الفئات الفرعية",
      image: "صورة",
      description: "وصف",
      owner: "صاحب",
      category: "الفئة",
      subcategory: "تصنيف فرعي",
      approve: "يوافق",
      disapprove: "رفض",
      send_message: "إرسال رسالة",
      approve_vendor: "الموافقة على البائع",
      disapprove_vendor: "رفض البائع",
      send: "إرسال",
      send_message_to_vendor: "إرسال رسالة إلى البائع",
      send_message_to_driver: "إرسال رسالة لشريك التوصيل",
      message: "رسالة",
      country: "بلد",
      type: "اكتب",
      vendor: "بائع",
      vehicle: "مركبة",
      vehicle_name: "اسم المركبة",
      number_plate: "لوحة الأرقام",
      assigned_order: "أمر معين",
      store_name: "اسم المتجر",
      status: "الحالة",
      delivery_mode: "وضع التوصيل",
      delivery_vehicle: "مركبة توصيل",
      user: "المستعمل",
      items: "العناصر",
      invoice: "فاتورة",
      price: "السعر",
      quantity: "كمية",
      requirements: "المتطلبات",
      wallet: "محفظة نقود",
      currency: "عملة",
      proposals: "اقتراحات",
      delivery_location: "موقع التسليم",
      additional_notes: "ملاحظات إضافية",
      welcome_to_the_waspha: "مرحبًا بكم في الوصفا",
      all: "الكل",
      key: "مفتاح",
      english: "الإنجليزية",
      arabic: "عربى",
      translations: "الترجمات",
      logo: "شعار",
      day: "يوم",
      from: "من",
      to: "إلى",
      sent_successfully: "أرسلت بنجاح",
      fraud: "النصب والاحتيال",
      secondary_image: "الصورة الثانوية",
      favourite_locations: "المواقع المفضلة",
      title: "لقب",
      landmark: "معلم معروف",
      notification_templates: "قوالب الإخطار",
      title_en: "Title(EN)",
      title_ar: "Title(AR)",
      body_en: "Body(EN)",
      body_ar: "Body(AR)",
      promo_codes: "Promo Codes",
      promo_code: "Promo Code",
      discount: "Discount",
      select_vendor: "Select Vendor",
      select_country: "Select Country",
      select_category: "Select Category",
      select_subcategory: "Select Subcategory",
      payment_methods: "Payment Methods",
      service_modes: "Service Modes",
      apply_on: "Apply On",
      min_order_amount: "Minimum Order Amount",
      max_discount: "Max Discount",
      number_of_uses: "Number Of Uses",
      description_en: "Description(EN)",
      description_ar: "Description(AR)",
      image_en: "Image(EN)",
      image_ar: "Image(AR)",
      start_time: "تبدأ في",
      end_time: "يغلق عند مستوى",
      is_requested: "مطلوب",
      select_users: "مطلوب",
      reports: "التقارير",
      order_id: "هوية الطلب",
      provider_id: "هوية المزود",
      provider_name: "اسم المزود",
      user_id: "هوية المستخدم",
      user_name: "اسم االمستخدم",
      credit_amount: "مبلغ الائتمان",
      debit_amount: "مقدار الخصم",
      total_earning: "مجموع الأرباح",
      payment_method: "طريقة الدفع او السداد",
      screen_contents: "محتويات الشاشة",
      screen_contents: "محتوى الشاشة",
      all_payment_methods: "جميع طرق الدفع",
      all_service_modes: "جميع أوضاع الخدمة",
      rfp_id: "طلب هوية الاقتراح",
      delivery_partner: "شريك التوصيل",
      order_time: "وقت الطلب",
      proposal_time: "وقت الاقتراح",
      proposal_id: "هوية الاقتراح",
      vendor_reports: "تقارير البائعين",
      vendor_report: "تقرير البائع",
      delivery_partner_reports: "تقارير شريك التوصيل",
      delivery_partner_report: "تقرير شريك التوصيل",
      delivery_partner_id: "هوية شريك التوصيل",
      delivery_partner_name: "اسم شريك التوصيل",
      mark_online: "علامة على الإنترنت",
      mark_offline: "وضع علامة في وضع عدم الاتصال",
      online: "عبر الانترنت",
      waspha_commission: "عمولة الوصفة",
      edit_waspha_commission: "تعديل عمولة الوصفة",
      updated: "تم التحديث بنجاح",
      settings: "الإعدادات",
      setting: "إعدادات",
      value: "القيمة",
      waspha_commission_delivery: "عمولة واسفا (توصيل)",
      waspha_commission_pickup: "عمولة واسفا (التقاط)",
      cancellation_reason: "سبب الإلغاء",
      cancellation_reasons: "أسباب الإلغاء",
      commissions: "اللجان",
      make_payment: "قم بالدفع",
      receive_payment: "يستلم الراتب",
      amount_paid: "المبلغ المدفوع",
      amount_received: "تم استلام المبلغ",
      make_payment_to_vendor: "قم بالدفع للبائع",
      receive_payment_from_vendor: "تلقي المدفوعات من البائع",
      approve_driver: "اعتماد شريك التوصيل",
      disapprove_driver: "عدم الموافقة على شريك التسليم",
      add_zone_option: "إضافة خيار المنطقة",
      change_zone_option: "تغيير خيار المنطقة",
      zone_option: "خيار المنطقة",
      zones: "المناطق",
      zone_map: "خريطة المنطقة",
      document: "وثيقة",
      subscribe_waspha_express: "Subscribe Waspha Express",
      unsubscribe_waspha_express: "Unsubscribe Waspha Express",
      susbcribe_vendor_to_waspha_express: "Subscribe Vendor To Waspha Express",
      unsusbcribe_vendor_to_waspha_express:
        "Unsubscribe Vendor To Waspha Express",
      is_subscribed_to_waspha_express: "Subcribed To Waspha Express",
      driver_commissions: "Waspha Commissions Driver",
      driver_commission: "Waspha Commission Driver",
      waspha_commission_normal: "Waspha Commission Delivery Mode",
      waspha_commission_traditional: "Waspha Commission Waspha Box",
      delivery_vehicle_charges: "Delivery Vehicle Charges",
      base_fee: "Base Fee",
      fee_per_minute: "Fee Per Minute",
      fee_per_km: "Fee Per KM",
      ads: "Ads",
      ad: "Ad",
      media_en: "Media(EN)",
      media_ar: "Media(AR)",
      select_drivers: "Select Drivers",
      delivery_vehicles: "Delivery Vehicles",
      delivery_vehicle: "Delivery Vehicle",
      subtitle_en: "Subtitle (EN)",
      subtitle_ar: "Subtitle (AR)",
      color_image: "Color Image",
      all_users_vendors_drivers: "All Users,Vendors,Delivery Partners",
      select_delivery_partners: "Select Delivery Partners",
      radius: "Radius (KM)",
      media: "Media",
      menu: "Menu",
      is_featured: "Is Featured",
      store_products: "Store Products",
      store_product: "Store Product",
      create_store_product: "Create Store Product",
      business_categories: "Business Categories",
      business_category: "Business Category",
      create_store_category: "Create Store Category",
      edit_store_category: "Edit Store Category",
      name_en: "Name (EN)",
      name_ar: "Name (AR)",
      select_parent_category: "Select Parent Category",
      products: "Products",
      en: "En",
      ar: "Ar",
      space: " ",
      delivery_range: "Delivery Range",
      fulltime: "Full Time",
      all_users: "All Users",
      all_vendors: "All Vendors",
      all_delivery_partners: "All Delivery Partners",
      all_delivery_vehicles: "All Delivery Vehicles",
      common: "Common",
      charges: "Charges",
    },
  },
};

export default arabicMessages;
