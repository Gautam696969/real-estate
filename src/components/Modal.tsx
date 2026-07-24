import { useState } from 'react';

const Modal = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="modal-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] hidden items-center justify-center p-5">
      <div className="main-register-holder max-w-[450px] w-full relative">
        <div className="main-register bg-dark-200 border border-white/5 rounded-2xl p-8 relative">
          <div className="close-reg absolute top-5 right-5 text-white/40 text-xl cursor-pointer transition-colors duration-300 hover:text-white">
            <i className="fa fa-times"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Welcome to <span className="text-gold-600">Ravmoyaan</span>
          </h3>

          <div id="tabs-container">
            <ul className="tabs-menu flex gap-0 mb-6 bg-dark-300 rounded-xl p-1">
              <li className={`flex-1 ${activeTab === 'login' ? 'current' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('login'); }} className={`block text-center py-2.5 text-sm font-semibold uppercase rounded-lg transition-all duration-300 ${activeTab === 'login' ? 'bg-gold-600 text-dark-500' : 'text-white/50 hover:text-white'}`}>Login</a>
              </li>
              <li className={`flex-1 ${activeTab === 'register' ? 'current' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('register'); }} className={`block text-center py-2.5 text-sm font-semibold uppercase rounded-lg transition-all duration-300 ${activeTab === 'register' ? 'bg-gold-600 text-dark-500' : 'text-white/50 hover:text-white'}`}>Register</a>
              </li>
            </ul>

            <div className="tab">
              <div id="tab-1" className={`tab-contents ${activeTab === 'login' ? 'active' : 'hidden'}`}>
                <div className="custom-form">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Username or Email Address *</label>
                      <input type="text" name="email" className="w-full px-4 py-3 bg-dark-300 border border-white/10 text-white text-base rounded-xl outline-none transition-colors duration-300 focus:border-gold-600 placeholder:text-white/30" />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Password *</label>
                      <input type="password" name="password" className="w-full px-4 py-3 bg-dark-300 border border-white/10 text-white text-base rounded-xl outline-none transition-colors duration-300 focus:border-gold-600 placeholder:text-white/30" />
                    </div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 text-base font-semibold rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)]">
                      Log In
                    </button>
                  </form>
                </div>
              </div>

              <div id="tab-2" className={`tab-contents ${activeTab === 'register' ? 'active' : 'hidden'}`}>
                <div className="custom-form">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Username *</label>
                      <input type="text" name="username" className="w-full px-4 py-3 bg-dark-300 border border-white/10 text-white text-base rounded-xl outline-none transition-colors duration-300 focus:border-gold-600 placeholder:text-white/30" />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Email Address *</label>
                      <input type="email" name="email" className="w-full px-4 py-3 bg-dark-300 border border-white/10 text-white text-base rounded-xl outline-none transition-colors duration-300 focus:border-gold-600 placeholder:text-white/30" />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Password *</label>
                      <input type="password" name="password" className="w-full px-4 py-3 bg-dark-300 border border-white/10 text-white text-base rounded-xl outline-none transition-colors duration-300 focus:border-gold-600 placeholder:text-white/30" />
                    </div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 text-base font-semibold rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)]">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
